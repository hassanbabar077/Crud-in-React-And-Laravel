import './App.css';
import React, { useState, useEffect } from 'react';

function Mainpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await fetch('http://localhost:8000/api/getProducts');
        result = await result.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.warn("result", data);
  return (
    <div className="main-content">
      <section className="content">
        <h1 className='contentheading'>Welcome to Our Website</h1>
        <p>This is some introductory content about the website.</p>
      </section>
      <section className="products">
        <h2>Our Products</h2>
        <p>Here you can find a selection of our finest products.</p>
        <div className="product-slider">
          {data.map((item) => (
            <div key={item.id} className="slider-item">
              <div className="column-container">
                <img src={"http://localhost:8000/" + item.image}  className="column-image" />
                <h1 className="column-heading">{item.name}</h1>
                <h2 className="column-subheading">${item.price}</h2>
                <p className="column-paragraph">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Mainpage;
