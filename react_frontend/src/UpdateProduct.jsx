import React, { useState, useEffect  } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

function UpdateProduct() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        name: '',
        image: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/editProduct/' + id);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData(prevData => ({
            ...prevData,
            image: file
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('price', data.price);
            formData.append('description', data.description);
            formData.append('image', data.image);

            const response = await fetch('http://localhost:8000/api/UpdateProduct/' + id, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            console.log('Product updated:', result);
            navigate('/list');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
       
        <form className='Addform' onSubmit={handleSubmit}>
            <div className='frm1'>
                <input type="text" name="name" value={data.name} placeholder='Name' className='form1Input' onChange={handleChange} />
            </div>
            <div className='frm1'>
                <input type="file" name="image"  value={data.image ? '' : undefined} className='form1Input' onChange={handleImageChange} />
            </div>
            <div className='frm1'>
                <input type="text" name="price" value={data.price} placeholder='Price' className='form1Input' onChange={handleChange} />
            </div>
            <div className='frm1'>
                <input type="text" name="description" value={data.description} placeholder='Description' className='form1Input' onChange={handleChange} />
            </div>
         
            <button type="submit" className='btnadd'>Submit</button>
           
        </form>
    );
}

export default UpdateProduct;
