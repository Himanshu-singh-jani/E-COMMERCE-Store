import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ProductsCard from '../../components/ProductsCard/ProductsCard';

const CategoryProducts = () => {
  const {name} = useParams()

  const [products, setproducts] = useState([]);

  useEffect(() => {
    FetchProducts();
  }, []); 

  const FetchProducts = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/category/${name}`);
    const json = await data.json();
    console.log(json);

    setproducts(json);
  };

  if(products.length === 0) return<div>loading......</div>
  return (
    
    <ProductsCard  products={products}/>
    
  )
}

export default CategoryProducts