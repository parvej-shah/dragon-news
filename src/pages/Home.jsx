import React from 'react'
import Category from '../components/Category'
import NewsCard from '../components/NewsCard'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex'>
        <aside className='w-1/4'><Category/><NewsCard/>
        </aside>
        <section className='w-3/4 space-y-6'>
        <h2 className='font-semibold text-xl text-primaryText'>Dragon News Home</h2>
        <Outlet/>
        </section>
    </div>
  )
}
