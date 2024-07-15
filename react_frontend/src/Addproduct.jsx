import React, { useState } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';

function Addproduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addproduct(event) {
    event.preventDefault(); // Prevents the default form submission
    console.warn(name, image, price, description);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('price', price);
    formData.append('description', description);
    
    try {
      let result = await fetch("http://localhost:8000/api/addproduct", {
        method: 'POST',
        body: formData
      });
      if (result.ok) {
        alert("Product added successfully");
        navigate('/list');
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product");
    }
  }

  return (
    <form className='Addform' onSubmit={addproduct}>
      <div className='frm1'>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} className='form1Input' />
      </div>
      <div className='frm1'>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} className='form1Input' />
      </div>
      <div className='frm1'>
        <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='Price' className='form1Input' />
      </div>
      <div className='frm1'>
        <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Description' className='form1Input' />
      </div>
      <button type="submit" className='btnadd'>Submit</button>
    </form>
  )
}

export default Addproduct;
