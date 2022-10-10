import React, { useEffect, useState } from "react";
import axios from "axios";
// get the product item details through the props
const ProductCard = () => {
  const [product,updateProduct] =useState({page:1,data:[]})
  const api ="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"

  useEffect(()=>{
    axios
    .get(api)
    .then((data)=>updateProduct({...data,data}))
  },[])
  return <div data-testid="productcard">
    {product.data  && product.data.map(user =>(
      <div key ={user.id} id ="boxes">
        <img src="{user.image}/>
        <div id =" flex">
        <p>{user.brand}</p>
        <p>{user.price}</p>
      </div>
      <h2>{user.title}</h2>
    ))}
  </div>;
};

export default ProductCard;
