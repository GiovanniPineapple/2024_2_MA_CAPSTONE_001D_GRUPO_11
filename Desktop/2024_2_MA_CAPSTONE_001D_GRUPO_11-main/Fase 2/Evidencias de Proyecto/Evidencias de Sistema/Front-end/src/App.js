import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.css';
import Header from './components/header';
import Carousel from './components/carousel';
import NewsSection from './components/newsection';
import ChatBox from './components/chatbox';
import Footer from './components/footer';
import UserForm from './components/formuser';
import UserList from './components/userlist';
import AddServiceForm from './components/addservice';
import ServiceList from './components/servicelist';
import ServiceListCard from './components/ServiceListCard';
function App() {
  useEffect(() => {
    // Inicializa el carrusel
    const bootstrap = require('bootstrap');
    const carouselElement = document.querySelector('#heroCarousel');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement);
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <NewsSection />
          </>
        } />
        <Route path="/formuser" element={<UserForm />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/addservice" element={<AddServiceForm />} />
        <Route path="/servicelist" element={<ServiceList />} />
        <Route path="/servicelistCard" element={<ServiceListCard />} />
      </Routes>
      <ChatBox />
      <Footer />
    </Router>
  );
}

export default App;
