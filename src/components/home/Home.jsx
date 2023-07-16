import React from 'react';
import './home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.avif';
import image4 from '../../assets/4.jpg';
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const handleDivClick = () => {
        // Redirect the user to the desired website
        window.location.href = 'http://127.0.0.1:5500/public/hangout.html';
      };
    const carouselSettings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Set the autoplay speed to 2000ms (2 seconds)
    };
    const history = useNavigate();
    return (
        <div>
            
            <div className="homepage">
                <div className='home-left'>
                    <div className="big-circle">
                        <div className="small-circle" onClick={()=>history('/events')}>Events</div>
                        <div className="small-circle" onClick={()=>history('/news')}>News</div>

                        <div className="small-circle"></div>
                        <div className="small-circle" onClick={handleDivClick}>Hangout</div>

                        <div className="small-circle"></div>
                        <div className="small-circle" onClick={()=>history('/fundraisers')}>Fundraisers</div>
                    </div>

                </div>
                <div className='home-right'>
                    <h2>Celebrate Love, Celebrate Pride.</h2>
                    <div className='carousel-container'>
                        <Slider {...carouselSettings} className='slider'>
                            <div>
                                <img src={image2} alt='pride' />
                            </div>
                            <div>
                                <img src={image3} alt='pride' />
                            </div>
                            <div>
                                <img src={image4} alt='pride' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            {/* <img src={image1} alt='logo' className='home-image' /> */}

        </div>

    );
};

export default HomePage;
