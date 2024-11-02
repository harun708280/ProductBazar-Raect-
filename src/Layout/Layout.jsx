import React from 'react';
import Nav from '../Component/Common/Nav';
import Footer from '../Component/Common/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="">
            <Nav></Nav>
            <ToastContainer></ToastContainer>
            </div>
            <div className="min-h-[calc(100vh-280px)]">
              <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Layout;