import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image2 from '../../assets/2.jpg';
import './fundraiser.css';
const FundraiserCard = (props) => {
  const navigate = useNavigate();
    const { title, description, image , targetAmount} = props;
    const truncatedDescription = description.length > 100 ? description.slice(0, 100) + '...' : description;
    return (
      <div className='event'>
        {/* Display event details */}
        <h4 className='event-title'>{title}</h4>
        <img className='event-image' src={image} alt='Event' />
        <p> {truncatedDescription}</p>
        <p><h5 className="target">Target Amount: {targetAmount}</h5> </p>
        <button onClick={()=>navigate('/fundraisers/donate')} className="create-fundraiser-button create-event-button">Donate Now</button>
        {/* <p>{description}</p> */}
  
  
      </div>
    );
  };
  const Fundraisers = () => {
    const [fundraisers , setFundraisers ] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      fetchFundraisers ();
    }, []);
    const fetchFundraisers  = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/fundraisers',
          {
            method: 'GET',
          }
        );
        if (response.ok) {
          const data = await response.json();
          setFundraisers (data);
          console.log("this is data" + data);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div className="events">
        <div className='upcoming-heading'>
          <h2>
            Help your community by donating to these fundraisers!
          </h2>
          <button onClick={()=>navigate('/fundraisers/create')} className='create-event-button'>
            Create 
          </button>
        </div>
  
        <div className="upcoming">
          {fundraisers
            .map((event, index) => (
              <FundraiserCard
                key={index}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
                targetAmount={event.targetAmount}
                image={image2} 
              />
            ))}
        
        </div>
        
         
       
      </div>
    )
  }
  export default Fundraisers;