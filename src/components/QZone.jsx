import React from 'react';
import playGround from '../assets/playground.png';
import swimming from '../assets/swimming.png';
import claSs from '../assets/class.png';
const activities = [
  { id: 1, title: 'Swimming', image: swimming },
  { id: 2, title: 'Class', image: claSs },
  { id: 3, title: 'Play Ground', image: playGround }
];

const QZone = () => {
  return (
    <div className="p-4 max-w-sm mx-auto  ">
      <h2 className="text-xl font-semibold mb-4">Q-Zone</h2>
      <div className="space-y-2 bg-primaryBg rounded-sm mx-2 p-2">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className=" p-4 bg-transparent rounded-lg overflow-hidden"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QZone;
