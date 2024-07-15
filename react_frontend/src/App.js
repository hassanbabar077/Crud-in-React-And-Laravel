// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Mainpage from './Mainpage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Addproduct from './Addproduct';
import Productlist from './Productlist';
import UpdateProduct from './UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Navbar />
       
      </header>
      <Routes>
      <Route path="/add" element={<Addproduct />} />
        </Routes>
        <Routes>
      <Route path="/list" element={<Productlist />} />
        </Routes>
        <Routes>
      <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
        <main>
        <Routes>
      <Route path="/" element={<Mainpage />} />
        </Routes>
      </main>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
