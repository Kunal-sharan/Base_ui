// src/App.jsx
import React from 'react';
import Header from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/AboutChillGuy';
import Testimonials from './components/TestimonialSlider';
import Footer from './components/Footer';
import '../src/index.css';

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <About />
            <Testimonials />
            <Footer />
        </>
    );
};

export default App;
