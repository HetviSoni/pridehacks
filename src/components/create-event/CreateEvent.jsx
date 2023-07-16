import React, { useState } from 'react';
import './createevent.css';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }
    const navigate = useNavigate();
    const [image, setImage] = useState({myfile:""});
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        upcoming: true
    });
    const handleFormChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8000/api/events', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000/',
                    'Access-Control-Allow-Methods':'POST',
                    "Content-Type": "application/json"
                    
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    date: formData.date,
                    location: formData.location,
                    image: image.myfile,
                    upcoming: true
                })
            });
    
            console.log("this is json stringify" + JSON.stringify(formData));
    
            if (response.ok) {
                const data = await response.json();
                console.log("this is res " + JSON.stringify(data));
                navigate('/events');
            } else {
                throw new Error('Request failed');
            }
        } catch (error) {
            console.error(error);
            // Handle error response
        }
    };
    
    const handleImageChange = async(e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setImage({...image,myfile:base64});
        console.log(base64+"this is base64");
        // setImage(file);
    };

    return (
        <div className="create-event">
            <h2>Create Event</h2>
            <form onSubmit={handleSubmit} className="create-event-form">
                <div>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <br />
                    <textarea
                        id='description'
                        value={formData.description}
                        name='description'
                        onChange={handleFormChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <br />
                    <input
                        id='date'
                        type="date"
                        name='date'
                        value={formData.date}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <br />
                    <input
                        id='location'
                        type="text"
                        name='location'
                        value={formData.location}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id='image' name='image' accept='.jpeg,.png,.jpg' onChange={handleImageChange} required />
                </div>
                <button className="create-event-button" type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
