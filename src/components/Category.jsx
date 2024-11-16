import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Category() {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])
  return (
    <div>
        <h2 className='font-semibold text-xl text-primaryText'>All Category</h2>
        <div className='my-6 text-center space-y-4 mx-3'>
            {categories.map(category=><NavLink key={category.category_id} to={`news/category/${category.category_id}`} className={({isActive})=>isActive?" text-primaryText font-semibold bg-secondBg flex justify-center items-center rounded-md w-full text-xl btn h-fit":"btn h-fit font-medium text-[#9F9F9F] rounded-md w-full text-xl bg-transparent border-none"}>{category.category_name}</NavLink>)}
        </div>
    </div>
  )
}
