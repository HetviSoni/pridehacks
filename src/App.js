import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './components/events/Events';
import HomePage from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import CreateEvent from './components/create-event/CreateEvent';
import NewsContainer from './components/news/News';
import Fundraisers from './components/fundraisers/Fundraiser';
import CreateFundraiser from './components/fundraisers/CreateFundraiser';
import Donate from './components/fundraisers/Donate';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<HomePage/>} />
        <Route path="/events" caseSensitive={false} element={<Events/>} />
        <Route path="/events/create" caseSensitive={false} element={<CreateEvent/>} />
        <Route path="/news" caseSensitive={false} element={<NewsContainer/>} />
        <Route path="/fundraisers" caseSensitive={false} element={<Fundraisers/>} />
        <Route path="/fundraisers/create" caseSensitive={false} element={<CreateFundraiser/>} />
        <Route path="/fundraisers/donate" caseSensitive={false} element={<Donate/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
