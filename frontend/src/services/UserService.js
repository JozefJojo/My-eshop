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

export const getUserByEmail = async (email) => {

  try {
    const response = await axios.get(`${apiServerUrl}/users/email/${email}`)
    return response
  } catch (error) {
    console.log(error.message)
  }
}