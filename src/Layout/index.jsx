import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../Pages/Home'
import About from '../Pages/About'
import { Route, Routes } from 'react-router-dom';

function Index() {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Index