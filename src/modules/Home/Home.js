import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";

import StatCard from "../../components/StatCard/StatCard";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

import Categories from "../../components/Categories/Categories";

const Home = () => {
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
    <>
      <Hero />

      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>

      {products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <div> Loading....</div>
      )}

      

      <StatCard />
    </>
  );
};

export default Home;
