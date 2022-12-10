import axios from 'axios'


const apiServerUrl = "http://localhost:8080"

export const saveUser = async (accessToken, newUser) => {


  try {
    const response = await axios.post(`${apiServerUrl}/users`,
      newUser,
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      } 
    )

    console.log("The user has been created.", response.data)

  } catch (error) {
    console.log("The user already exists.")
  }
  


}