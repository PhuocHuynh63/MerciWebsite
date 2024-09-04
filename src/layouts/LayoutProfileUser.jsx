import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './scss/LayoutProfileUser.scss';
import SideBarProfileUser from '../components/sidebarProfileUser/SidebarProfileUser';

export default function ({ Component }) {
    return (
        <div className='layout-profile'>
            <Header />

            <div className='container main-content'>
                <SideBarProfileUser />
                <Component />
            </div>
            <Footer />
        </div>
    );
}