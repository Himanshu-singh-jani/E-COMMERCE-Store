import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const carts = JSON.parse(localStorage.getItem('cart')) || [];
  const navigate=useNavigate()
const [total, settotal]=useState(0)

useEffect(()=>{
const total=carts.reduce((acc,item)=>{
return acc +(item.price *item.quantity)
},0)

settotal(total)

},[])


const handleDec=(id)=>{

  const updatedCart=carts.map(item => {
    if(item.id === id){
      return {
        ...item,
        quantity:item.quantity-1
      }
    }
    return item
  })
  localStorage.setItem('cart',JSON.stringify(updatedCart))
   navigate('/cart')
}

const handleInc=(id)=>{
  const updatedCart=carts.map(item => {
    if(item.id === id){
      return {
        ...item,
        quantity:item.quantity+1
      }
    }
    return item
  })
  localStorage.setItem('cart',JSON.stringify(updatedCart))
  navigate('/cart')
}
 const handleRemove=(id)=>{
  const updatedCart=carts.filter(item=> item.id !== id)
  localStorage.setItem('cart',JSON.stringify(updatedCart))
 }

if(carts.length===0){
  return <div className="uppecase text-3xl text-red-500 items-center flex justify-center h-[55vh]">its empty 🛒</div>
}

   
  return (
    <div className="container mx-auto mtm-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{carts.length} Items</h2>
          </div>

          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold  text-gray-600 text-xs uppercace w-2/5">
              {" "}
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercace w-1/5">
              {" "}
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercace w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercace w-1/5">
              {" "}
              Total
            </h3>
          </div>
                 
                 {
                  carts.map(cart =>{

                    return(
                      
                      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={cart.image} alt={cart.title} />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{cart.title}</span>
                    <span className="font-bold text-sm">{cart.category}</span>
                    <div className="font-semibold hover:text-red-500 text-gray-500 text-sm" onClick={()=>handleRemove(cart.id)}>
                      remove
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <button className=" border text-center w-8 font-semibold cursor-pointer" onClick={()=>handleDec(cart.id)}>
                    -
                  </button>
                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={cart.quantity}
                  />
                  <button className=" border text-center w-8 font-semibold cursor-pointer" onClick={()=>handleInc(cart.id)}>
                    +
                  </button>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {cart.price*80}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                 {cart.price*cart.quantity}
                </span>
              </div>

                    )
                  })
                 }
          
              
          

          <Link
            to={"/products"}
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            Continue Shopping
          </Link>
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="text-sm font-semibold uppercase">items {carts.length}</span>
            <span className="text-sm font-semibold"> $ {total*80}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              shipping
            </label>
            <select className="bloce p-2 text-gray-600 text-sm w-full">
              <option> standerd shipping - $10</option>
              <option> standerd shipping - $20</option>
            </select>
          </div>
          <div className="py-10">
            <label
              for="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo code
            </label>
            <input
              className="p-2 text-sm w-full"
              type="text"
              id="promo"
              placeholder=" Enter your code"
            />
          </div>
          <button className="bg-red-400 hover:bg-red-600 text-sm text-white py-2 px-5 uppercase">
            Apply
          </button>
          <div className="flex p-y-6 justify-between uppercase text-sm font-semibold">
            <span>Total cost</span>
            <span> $ {total*80 +10}</span>
          </div>
          <button className="bg-indigo-400 hover:bg-indigo-600 font-semibold py-3 text-sm uppercase text-white w-full">
            {" "}
            Cheackout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

