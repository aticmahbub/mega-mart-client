import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import FirebaseProvider from '../provider/FirebaseProvider';

const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar/>
            {/* Outlet */}
            <div className='min-h-[calc(100vh-136px)]'>
            <Outlet/>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Main;