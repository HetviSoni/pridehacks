import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateFundraiser = () => {
    const navigate = useNavigate();
      const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        targetAmount: '',
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
            const response = await fetch('http://localhost:8000/api/fundraisers', {
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
                    targetAmount: formData.targetAmount,
                })
            });
    
            console.log("this is json stringify" + JSON.stringify(formData));
    
            if (response.ok) {
                const data = await response.json();
                console.log("this is res " + JSON.stringify(data));
                navigate('/fundraisers');
            } else {
                throw new Error('Request failed');
            }
        } catch (error) {
            console.error(error);
            // Handle error response
        }
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div className="create-event">
            <h2>Create Fundraiser</h2>
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
                        // onChange={(e) => setDate(e.target.value.toString())}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="targetAmount">Target Amount:</label>
                    <br />
                    <input
                        id='targetAmount'
                        type="text"
                        name='targetAmount'
                        value={formData.targetAmount}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id='image' name='image' onChange={handleImageChange} required />
                </div>
                <button className="create-event-button" type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateFundraiser;
