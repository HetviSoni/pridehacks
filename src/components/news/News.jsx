import React from 'react';
import { useState, useEffect } from 'react';
import './news.css';
import image from '../../assets/3.avif';
// const NewsCard = ({ image_url, title, pubDate, description, link }) => {
//     const openNewsLink = () => {
//         window.open(link, '_blank');
//     };

//     return (
//         <div className="news-card" onClick={openNewsLink}>
//             <div>
//                 <img className='news-image' src={image_url} alt="News" />
//             </div>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{new Date(pubDate).toLocaleDateString()}</p>
//                 <p>{description}</p>
//             </div>

//         </div>
//     );
// };

const NewsCard = ({ newsItem }) => {
    const { image_url, title, pubDate, description, link } = newsItem;

    const openNewsLink = () => {
        window.open(link, '_blank');
    };

    return (
        <div className="news-card" onClick={openNewsLink}>
            <div>
                <img src={image_url || image} alt="News" className='news-image' />

            </div>
            <div>
                <h2>{title}</h2>
                <p>{new Date(pubDate).toLocaleDateString()}</p>
                <p>{description}</p>
            </div>

        </div>
    );
};
const NewsContainer = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_246447cf9e9ff1cd77c3b00c5de1ff01d507a&q=lgbtq%20AND%20pride&language=en ');
                const data = await response.json();
                setNewsData(data.results);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchNewsData();
    }, []);
    return (
        <div className='news-container'>
            <h2>News</h2>

            <div>
                {newsData.map((newsItem, index) => (
                    <NewsCard key={index} newsItem={newsItem} />
                ))}
            </div>
            {/* <div>
                <NewsCard
                    image_url="https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_1600.jpg"
                    title="A Utah city violated the First Amendment in denying a drag show permit, judge rules"
                    pubDate="2023-06-17 22:53:56"
                    description="Utah city must issue a permit for a group that organizes drag performances."
                    link="https://abcnews.go.com/US/wireStory/utah-city-violated-amendment-denying-drag-show-permit-100168240"
                />
                 <NewsCard
                    image_url="https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_1600.jpg"
                    title="A Utah city violated the First Amendment in denying a drag show permit, judge rules"
                    pubDate="2023-06-17 22:53:56"
                    description="Utah city must issue a permit for a group that organizes drag performances."
                    link="https://abcnews.go.com/US/wireStory/utah-city-violated-amendment-denying-drag-show-permit-100168240"
                />
                 <NewsCard
                    image_url="https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_1600.jpg"
                    title="A Utah city violated the First Amendment in denying a drag show permit, judge rules"
                    pubDate="2023-06-17 22:53:56"
                    description="Utah city must issue a permit for a group that organizes drag performances."
                    link="https://abcnews.go.com/US/wireStory/utah-city-violated-amendment-denying-drag-show-permit-100168240"
                />
            </div> */}
        </div>
    );
};

export default NewsContainer;
