import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
export default function NewsDetails() {
    const {data} = useLoaderData();
    const news = data[0];
  return (
    <div className="bg-base-100 p-10 rounded-lg shadow-lg m-4">
      <div className="relative">
        <img
          src={news.image_url}
          alt="News Image"
          className="rounded-2xl w-full h-[450px] object-center"
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-4 py-2 rounded-br-2xl rounded-tl-2xl">
          <h3 className="text-lg font-bold">Dragon News</h3>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-4">
        {news.title}
      </h2>

      <p className="text-gray-600 mt-4">
        {news.details}
      </p>
      <Link to={'/'} className="btn bg-[#D72050] text-white mt-4">
      <FaArrowLeft size={18} color="white" /> All news in this category
      </Link>
    </div>
  );
}
