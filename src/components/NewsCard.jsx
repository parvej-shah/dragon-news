import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

const newsData = [
  {
    id: 1,
    title: 'Bayern Slams Authorities Over Flight Delay to Club World Cup',
    category: 'Sports',
    date: 'Jan 4, 2022',
    image: 'https://picsum.photos/seed/sport/200/300',
  },
  {
    id: 2,
    title: 'Bayern Slams Authorities Over Flight Delay to Club World Cup',
    category: 'Sports',
    date: 'Jan 4, 2022',
    image: 'https://picsum.photos/seed/worldcup/200/300',
  },
  {
    id: 3,
    title: 'Bayern Slams Authorities Over Flight Delay to Club World Cup',
    category: 'Sports',
    date: 'Jan 4, 2022',
    image: 'https://picsum.photos/seed/seed/200/300',
  },
];

const NewsCard = () => {
  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">News</h2>
      <div className="space-y-6">
        {newsData.map((news) => (
          <div key={news.id} className="shadow-lg p-3 rounded-lg overflow-hidden border border-gray-200">
            <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-lg" />
            <div className="mt-2">
              <h3 className="font-semibold text-lg">{news.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <span>{news.category}</span>
                <FaRegCalendarAlt className="ml-2 mr-1" />
                <span>{news.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
