import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Productlist() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getList();
    }, []);

 async function deleteOperation(id) {   
    let result = await fetch('http://localhost:8000/api/deleteProduct/'+id, {
        method: 'GET',
    });
    result = await result.json();
    console.log(result);
    getList();
    window.location.reload(false);
 }
 function getList(){
    const fetchData = async () => {
        let result = await fetch('http://localhost:8000/api/getProducts');
        result = await result.json();
        setData(result);
    };
    fetchData();
 }
    return (
        <div className="listview">
            <div className='listheading'>
                <h1>Products Table</h1>
                <Link to={"/add"} className='listbtn'>
                    <button type="submit" className='btnadd'>Add Product</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><img src={"http://localhost:8000/"+item.image}  width="50" height="50" /></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><button onClick={()=>deleteOperation(item.id)} className='btnDelete'>Delete</button></td>
                            <td><Link to={"/update/"+item.id} >
                                <button className='btnUpdate'>Update</button>
                            </Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Productlist;
