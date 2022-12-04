import axios from 'axios'


const apiServerUrl = "http://localhost:8080"



export const saveUser = async (accessToken, newUser) => {

  const response = await axios.post(`${apiServerUrl}/users`,
  newUser,
  {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  }
  
  )


  return response.data
}