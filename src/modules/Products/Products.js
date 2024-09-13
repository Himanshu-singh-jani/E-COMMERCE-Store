import React, { useEffect, useState }  from 'react'
import ProductsCard from '../../components/ProductsCard/ProductsCard'

import Categories from '../../components/Categories/Categories'

const Products = () => {

  const [products, setproducts] = useState([]);

  useEffect(() => {
    FetchProducts();
  }, []);

  const FetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log(json);

    setproducts(json);
  };

  return (
    <div>
        
  <Categories/>

  <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          ALL PRODUCTS
        </h1>
      </div>

  {products.length > 0 ? 
   <ProductsCard products={products}/>
  : 
  <div> loading... </div>
  }
       
        
    </div>
  )
}

export default Products