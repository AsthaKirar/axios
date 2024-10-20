import React from 'react'

import { Link, Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';

const App = () => {
  const getproducts = async ()=>{
    
    try{ 
      const{ data } = await axios.get(
          "https://fakestoreapi.com/products"

      );
      console.log(data);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>

      
    </nav>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/About" element ={<About/>}></Route>

    </Routes>
    <button onClick={getproducts}>Products</button>
    </>
  )
}

export default App