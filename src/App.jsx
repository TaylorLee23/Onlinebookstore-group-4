import React from 'react';
import logo from './logo.svg';
import NavBar from './NavBar';
import TopSellingBooks from './TopSellingBooks';
import HeroBanner from './images/HeroBanner.jpg';
import Carousel from './Carousel';
import SearchBar from './SearchBar';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Confirmation from './Confirmation';

function App() {
    return (
        <div className="App">
            <NavBar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to our Online Book Store</h1>
                <Carousel />
                <SearchBar />
                <Testimonials />
                <Footer />
            </header>
            <div className="hero-banner">
                <img src={HeroBanner} alt="Hero Banner" />
                <h2>Welcome to our Online Book Store</h2>
                <p>Get lost in a good book today</p>
                <a href="#" className="cta-button">Shop Now</a>
            </div>
            <TopSellingBooks />
            <Confirmation />
        </div>
    );
}

export default App;