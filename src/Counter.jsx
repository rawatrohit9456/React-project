import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaMotorcycle, FaFlag, FaComments } from "react-icons/fa";
import { useEffect, useState } from "react";

const stats = [
  { icon: <FaHeart className="text-red-500 text-4xl" />, value: 1000, label: "Happy Customers" },
  { icon: <FaMotorcycle className="text-blue-500 text-4xl" />, value: 500, label: "Total Product Count" },
  { icon: <FaFlag className="text-green-500 text-4xl" />, value: 10, label: "Cities Serving Now" },
  { icon: <FaComments className="text-yellow-500 text-4xl" />, value: 10, label: "Pickup Locations" },
];

const Counter = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] += Math.ceil(stat.value / 100);
          } else {
            newCounts[index] = stat.value;
            clearInterval(intervals[index]);
          }
          return newCounts;
        });
      }, 100);
    });
    
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto mt-10">
      {stats.map((stat, index) => (
        <motion.div 
          key={index} 
          className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {stat.icon}
          <p className="text-2xl font-bold mt-2">{counts[index].toLocaleString()}</p>
          <p className="uppercase text-sm text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Counter;
