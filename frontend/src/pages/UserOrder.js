import react, { useState, useEffect} from 'react'
import GlobalState from '../common/globalState'
import { getUserbyId, editUser } from '../services/UserService'
import {useParams} from 'react-router-dom'
import { createOrder } from '../services/OrderService'
import OrderlineService from '../services/OrderlineService'

const UserOrder = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    city: "",
    address: "",
  })
  const [orderlines, setOrderlines] = useState([])

  const [message, setMessage] = useState("")
  const params = useParams()

  const getUserByIdAsync = async () => {
    const response = await getUserbyId(params.userId)
    setUser(response.data)
  }

  const getOrderlinesByUserIdAsync = async () => {
    const response  = await OrderlineService.getOrderlines(params.userId)
    setOrderlines(response.data)
  }

  useEffect(() => {
    getUserByIdAsync()
    getOrderlinesByUserIdAsync()
  }, [])

  const setInputField = event => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const renderOrderlines = () => {
    return GlobalState.orderlines.map( (o, i) => {
      return (
      <div key={i} style={{display: "flex", flexDirection: "row", maxWidth:"60%"}}>
            <div style={{marginRight: "1rem", marginLeft: "2rem", fontSize: "1.2em", fontWeight: 500}}>{i + 1}.</div>
            <h5>{o.title}</h5>
            <div style={{flexGrow: 1}}/>
            <div style={{marginRight: "2rem", fontSize: "1.2em", fontWeight: 500}}>Množství: {o.amount}</div>
            <div style={{fontSize: "1.2em", fontWeight: 500}}>{o.totalPrice} kč</div>
      </div>)
    })
  }

  const submit = async event => {
    event.preventDefault();
    const response = await editUser(user)
    console.log(response.data)
    setMessage("Dodací údaje byly aktualizovány.")
    setTimeout(() => {
      setMessage("")
    }, 1000)
  }

  const makeOrder = async () => {

    const totalPrice = orderlines.reduce((acc, item) => {return acc + item.totalPrice}, 0)

    const order  = {
      userId: user.id,
      address: user.address,
      totalPrice,
      orderlines: orderlines
    }

    const response  = await createOrder(order)
    console.log(response.data)
  }


  return (<div>
    <h1>Dodací údaje</h1>
    <form style={{display:"flex", flexDirection: "column"}} onSubmit={submit}>
      <label className="user-form-label">
        Jméno
      </label>
        <input type="text" value={user.name} className="user-input" disabled/>
      <label className="user-form-label">
        E-mail
      </label>
        <input type="text" name="email" value={user.email} className="user-input" disabled />
      <label className="user-form-label">
        Město
      </label>
        <input type="text" name='city' value={user.city} onChange={setInputField} className="user-input"/>
      <label className="user-form-label">
        Adresa
      </label>
        <input type="text" name='address' value={user.address} onChange={setInputField} className="user-input"/>
      <input type="submit" value="Uložit" className="user-input-button"/>
    </form>
    <div style={{marginTop: "1rem", marginLeft: "1rem", fontWeight: "bold"}}>{message}</div>

    <h4 style={{marginTop: "2rem"}}>Položky v košíku</h4>
    <div>
      {renderOrderlines()}
    </div>
    <button style={{marginTop: "2rem"}} onClick={() => makeOrder()}>Objednat</button>
  </div>)

}

export default UserOrder