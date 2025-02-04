import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
    return (
        <div>
            <Header />

            <div style={{minHeight:'100vh'}} className='text-light bg-dark'>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default RootLayout