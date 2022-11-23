import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import PageLoader from '../components/layouts/PageLoader';

const MainLayout = () => {
    return (
        <div className='box-container limit-width'>
            <Header />
            <div>
                <Suspense fallback={<PageLoader />}>
                    <Outlet />
                </Suspense>
            </div>
            {/* **** BUTTON GO TOP **** */}
            <Link href="#0" className="cd-top"> <i className="fas fa-angle-up"></i> </Link>
            <Footer />
        </div>
    );
};

export default MainLayout;