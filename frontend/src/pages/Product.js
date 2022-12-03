import axios from 'axios';
import React, {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ProductService from '../services/ProductService';


const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null) 

  useEffect(() => {
    ProductService.getProducts().then((res) =>{
      setProduct(res.data)
    }); 
  }, []);

  return (
  <div>
        <div>{product.id}</div>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.thumnail}</div>
        <div>{product.category_id}</div>
        <div>{product.price}</div>
        <div>{product.producer_id}</div> 
  </div>)
}

export default Product
