import React from 'react';
import { motion } from 'framer-motion';
import heroBg from './assets/images/hero-bg.png';


const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-fixed bg-center bg-cover"
     style={{ backgroundImage:`url(${heroBg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-5 text-white">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore the Open Roads
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Rent the best cars and bikes at unbeatable prices.
        </motion.p>
        <motion.a
          href="#services"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={screenLeft}
        >
          View Our Fleet
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;



