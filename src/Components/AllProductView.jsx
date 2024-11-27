import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const AllProductView = () => {
  const { category } = useParams();
  const [allProductsByCategory, setAllProductsByCategory] = useState();

  const getProductByCategories =async () => {
    const productByCategory = await fetch(`https://dummyjson.com/products/category/${category}`);
    const productByCategoryJson = await productByCategory.json();
    setAllProductsByCategory(productByCategoryJson.products);
    
  } 
  
  useEffect(()=>{
    getProductByCategories();
    
    
  }, [])

  console.log(allProductsByCategory);

  return <div className="md: mx-32 mt-10 flex gap-5 flex-wrap">
            {allProductsByCategory && allProductsByCategory.map((item) => (
          <Link to={/product/ + item.id} key={item.id}>
            <ProductCard props={item} />
          </Link>
        ))}
  </div>;
};

export default AllProductView;
