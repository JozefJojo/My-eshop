import axios from 'axios'


const apiServerUrl = "http://localhost:8080"

export const saveUser = async (accessToken, newUser) => {


  try {
    const response = await axios.post(`${apiServerUrl}/users`,
      newUser,
      {
        headers: {
          "content-type": "application/json"
        }
      } 
    )

    console.log("The user has been created.", response.data)

  } catch (error) {
    console.log("The user already exists.")
  }
}

export const getUserbyId = async (userId) => {
  try {
    const response = await axios.get(`${apiServerUrl}/users/id/${userId}`)
    return response
  } catch (error) {
    console.log(error.message)
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

export const editUser = async (user) => {
  try {
    const response = await axios.put(`${apiServerUrl}/users/`, 
    user,
    {
      headers: {
        "content-type": "application/json"
      }
    })
    return response
  } catch (error) {
    console.log(error.message)
  }
}