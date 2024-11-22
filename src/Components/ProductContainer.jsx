import ProductDetailsContainer from "./ProductDetailsContainer"
import ProductImageContainer from "./ProductImageContainer"
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"

const ProductContainer = () => {
  const [productDetails, setproductDetails] = useState(null);
  const {id} = useParams()
  console.log('id', id);
  
  const getProductDetails = async (id) => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const jsonData = await data.json();
    setproductDetails(jsonData);
  }
  useEffect(()=>{
    getProductDetails(id);


  },[]);

  console.log(productDetails);
  if(productDetails){
  return (
    <div className='p-4 md:px-32 flex flex-col md:flex-row gap-8'>
    <ProductImageContainer images = {productDetails.images}/>
    <ProductDetailsContainer productDetails={productDetails} />
    </div>
  )}
}

export default ProductContainer