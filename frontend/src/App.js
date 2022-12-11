import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';
import Product from './pages/Product';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
