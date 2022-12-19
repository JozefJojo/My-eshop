import axios from 'axios'
const ordersUrl = "http://localhost:8080/orders"

export const createOrder = async order => {

  try {
    const response = await axios.post(`${ordersUrl}`, order,
      {
        headers: {
          "content-type": "application/json"
        }
      }
    )

    return response
  } catch (error) {
    console.log(error.message)    
  }

}
