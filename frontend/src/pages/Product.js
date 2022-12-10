import axios from 'axios';
import React, {useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import {useParams} from 'react-router-dom'
import Select from "react-select";
import { getUserByEmail } from '../services/UserService'
import { useAuth0 } from "@auth0/auth0-react";
import OrderlineService from '../services/OrderlineService'


const selectOptions = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
];

const Product = () => {
  const [product, setProduct] = useState(null)
  const [amount, setAmount] = useState(1)
  const { user } = useAuth0()
  const params = useParams()

  const displayText = () => {
    if (product) {
      if (product.description.length > 200) {
        return product.description.substring(0, 200)
      }
      return product.description
    }
  }

  const addToCart = async () => {

    const response = await getUserByEmail(user.email)

    const orderline = {
      totalPrice: amount.value * product.price,
      productId: parseInt(params.id),
      userId: response.data.id,
      amount
    }

    console.log(orderline)

    const orderlineResponse = await OrderlineService.createOrderline(orderline)
    console.log(orderlineResponse )
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
              <button style={{marginBottom: "1rem"}} onClick={() => addToCart()}>Add to Cart</button>
              <Select
                options={selectOptions}
                onChange={(amount) => setAmount(amount)}
              />

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
