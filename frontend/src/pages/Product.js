import axios from 'axios';
import React, {useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import {useParams} from 'react-router-dom'

const Product = () => {
  const [product, setProduct] = useState(null)
  const params = useParams()

  const displayText = () => {
    if (product) {
      if (product.description.length > 200) {
        return product.description.substring(0, 200)
      }
      return product.description
    }
  }

  const renderProduct = () => {
    if (product) {
      return (
        <div>
          <h2 style={{ }}>{product.title}</h2>
          <img src={`${product.thumbnail}`} alt={`product-${params.id}`} style={{width: "300px", height: "300px"}} />
          <div style={{ marginLeft: "0.5rem"}}>
            <h5>Popis:</h5>
            <div style={{ marginLeft: "0.5rem"}}>{displayText()}</div>
            <div style={{ marginLeft: "0.5rem", marginTop: "1rem", fontWeight: "600", fontSize: "1.2em"}}>{product.price} kč</div>
            <div style={{ display: "flex", flexDirection: "column", width: "200px", marginTop: "1rem"}}>
              <button style={{marginBottom: "1rem"}}>Add to Cart</button>
              <select>
                <option value="quantity">1</option>
                <option value="quantity">2</option>
                <option value="quantity">3</option>
                <option value="quantity">4</option>
                <option value="quantity">5</option>
              </select>

            </div>
          </div>
        </div>
      )
    }
  }

  
  useEffect(() => {
    const getProductAsync = async () => {
      const response = await ProductService.getProductById(params.id)
      setProduct(response.data)
    }
    
    getProductAsync()
  }, [])



  return (
    <div>
      {renderProduct()}
    </div>
    )
}

export default Product
