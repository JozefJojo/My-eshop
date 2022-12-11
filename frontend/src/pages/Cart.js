import {useState, useEffect } from 'react'
import OrderlineService from '../services/OrderlineService'
import { useAuth0 } from "@auth0/auth0-react";
import {getUserByEmail} from '../services/UserService'
import {ReactComponent as CloseLogo} from '../assets/close-logo.svg'

const Cart = () => {
  const { user } = useAuth0()
  const [orderlines, setOrderlines] = useState([])


  const deleteOrderlineFromCart = async (id, index) => {
    orderlines.splice(index, 1)
    setOrderlines(orderlines)
    await OrderlineService.removeOrderline(id)
  }

  const decrementOrderlineAmount = async (id, index) => {
    await OrderlineService.editOrderlineAmountById(id, orderlines[index].amount - 1)
    
    
    if (orderlines[index].amount - 1 <= 0) {
      orderlines.splice(index, 1)
    }
    else {
      const price = orderlines[index].totalPrice / orderlines[index].amount

      orderlines[index].amount -= 1; 
      orderlines[index].totalPrice -= price
    }

    setOrderlines(orderlines)

  }

  const incrementOrderlineAmount = async (id, index) => {
    orderlines[index].amount += 1;
    setOrderlines(orderlines)

    await OrderlineService.editOrderlineAmountById(id, orderlines[index].amount)
  }


  const renderOrderlines = () => {
    return orderlines.map((o,i) => <div key={i} className="orderline">
      
      <div style={{marginRight: "1rem", marginLeft: "2rem", fontSize: "1.2em", fontWeight: 500}}>{i + 1}</div>
      <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <h5>{o.title}</h5>
        <img src={`${o.thumbnail}`} alt={`orderline-${i}`} style={{width: "100px", height: "100px"}} />
      </div>
    <div style={{flexGrow: 1}}/>
      <button style={{width: "30px", height: "30px", cursor: "pointer"}} onClick={() => decrementOrderlineAmount(o.id, i)}>-</button>
      <button style={{margin: "0 1rem", width: "30px", height: "30px", cursor: "pointer"}} onClick={() => incrementOrderlineAmount(o.id, i)}>+</button>
     <div style={{marginRight: "2rem", fontSize: "1.2em", fontWeight: 500}}>{o.amount}</div>
    <div style={{fontSize: "1.2em", fontWeight: 500}}>{o.totalPrice} kč</div>
    <CloseLogo onClick={() => deleteOrderlineFromCart(o.id, i)} style={{width: "20px", height: "20px", marginLeft: "1rem", marginRight: "2rem", cursor: "pointer"}}/>
    </div>)
  }

  
  
  useEffect(() => {
    const getOrderlinesAsync = async () => {
      const response = await getUserByEmail(user.email)

      const orderlinesResponse = await OrderlineService.getOrderlines(response.data.id)

      setOrderlines(orderlinesResponse.data)
    }

    if (user) {
      getOrderlinesAsync()
    }
    
  }, [orderlines, user])


  return (<div>
    {renderOrderlines()}
    <div className="cart-bottom">
      <div>
        {orderlines.reduce((acc, item) => {return acc + item.totalPrice}, 0)}
      </div>
      <button>Pokračovat v nákupu</button>

    </div>
  </div>)
}

export default Cart;