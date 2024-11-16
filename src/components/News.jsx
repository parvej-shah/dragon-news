import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function News() {
  // @ts-ignore
  const { data } = useLoaderData();
  if(data.length>0){
    return (
        <div>
          {data.map((news) => (
            <div key={news._id}>
              <div className="card w-full bg-base-100 shadow-xm  border rounded-xl mt-5">
                <div className="">
                  {/* Author Info and Title */}
                  <div className="flex items-center mb-2 py-3 bg-secondBg p-5 rounded-t-xl">
                    <img
                      src={news.author.img}
                      alt={news.author.name}
                      className="rounded-full w-10 h-10 mr-3"
                    />
                    <div>
                      <div className="text-sm font-medium text-primaryText">
                        {news.author.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(news.author.published_date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold text-primaryText px-5">
                    {news.title}
                  </h2>
                </div>
    
                {/* Thumbnail */}
                <figure className="my-5 px-5">
                  <img
                    src={news.thumbnail_url}
                    alt={news.title}
                    className="w-full object-cover"
                    style={{ height: "280px" }}
                  />
                </figure>
    
                {/* Card Details */}
                <div className="space-y-4 px-5">
                  <p className="text-gray-700 mt-1">
                    {news.details.slice(0, 200)}...
                  </p>
                  <Link className="btn-link mt-1 text-[#FF8C47] font-semibold" to={`/news/${news._id}`}>
                    Read More
                  </Link>
                  <div className="flex items-center justify-between space-x-4 pb-5">
                    <div className="flex items-center text-[#FF8C47]">
                      <span className="mr-1">⭐</span>
                      <span>
                        {news.rating.number} ({news.rating.badge})
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <span>👁️</span>
                      <span>{news.total_view}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
  }
  else{
    return (<div>No Data found</div>);
  }
}
