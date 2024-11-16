import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginWithGoogle from '../components/LoginWithGoogle'
import SocialLinks from '../components/SocialLinks'
import QZone from '../components/QZone'

export default function Root() {
  return (
    <div className="container mx-auto">
        <Header/>
        <Navbar/>
        <div className='flex'>
            <div className='w-3/4'>
            <Outlet/>
            </div>
            <div className='w-1/4 space-y-3'>
            <LoginWithGoogle/>
            <SocialLinks/>
            <QZone/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
