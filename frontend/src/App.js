import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Product from './Product';


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response =  await axios.get("http://localhost:8080/products")
      console.log(response.data)

      const elements = response.data.map((p) => { return <Product name={p} />})
      setPosts(elements)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {posts}
    </div>
  );
}

export default App;
