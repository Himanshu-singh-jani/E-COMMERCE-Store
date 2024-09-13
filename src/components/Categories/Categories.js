import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

const Categories = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    Fetchcategories();
  }, []);

  const Fetchcategories = async () => {
    const data = await fetch("https://fakestoreapi.com/products/categories");
    const json = await data.json();
    console.log(json);

    setcategories(json);
  };

  if (categories.length === 0) return <div>loading....</div>;

  return (
    <div>
      <FeatureCard cards={categories} />
    </div>
  );
};

export default Categories;
