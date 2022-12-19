import axios from 'axios';
import React, {useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [products, setProducts] = useState([]) 
  const [searchValue, setSearchValue] = useState("")
  const [searchResults, setSearchResults] = useState([]) 

  const navigate = useNavigate()

  const setInput = event => {
    const { value } = event.target;
    setSearchValue(value)
    if (value.length > 0) {
      const result = products.filter(p => {
        if (p.title.toLowerCase().startsWith(value.toLowerCase())) {
          return p
        }

        if (p.producerName.toLowerCase().startsWith(value.toLowerCase())) {
          return p
        }

      })
      setSearchResults(result)
    }
    else {
      setSearchResults([])
    }
    
  }


  const displayText = (product) => {
    if (product) {
      if (product.description.length > 200) {
        return product.description.substring(0, 200)
      }
      return product.description
    }
  }

  useEffect(() => {
    const getProductsAsync = async () => {
      const response = await ProductService.getProducts()
      
      setProducts(response.data)
    }

    getProductsAsync()
  }, []);

  const renderProducts = () => {
    return products.map((product, index) => {
      return (
        <div key={index} className="product">
            <div>
                <h3 className="product-attribute" style={{}}>{product.title}</h3>
                <div className="product-attribute">{displayText(product)}</div>
                <div className="product-attribute">{product.producerName}</div> 
                <div className="product-attribute" style={{marginTop: "1rem", fontWeight: "bold"}}>{product.price} kč</div>
            </div>
            <div>
                <button onClick={() => navigate(`/product/${product.id}`)}>BUY</button>
            </div>
        </div>
      )
    })
  }

  return (
<div className="products-container">
    <input type="text" value={searchValue} onChange={setInput}/>

    <div style={{marginTop: "1rem", marginBottom: "1rem"}}>Vyhledávací výsledky</div>
    <div style={{border: "1px solid black", padding: "1rem 1rem"}}>
      {searchResults.map(r => {
        return (<div>
          {r.title}
        </div>)
      })}
    </div>
  
  <div className="products">
      {renderProducts()}
  </div>
</div>
  )
}

export default Home
