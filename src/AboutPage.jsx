
import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from './assets/images/about-image.png'

const AboutPage = () => {
  return (
    <main id = "Aboutpage">
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-stone-10 to-zinc-300 text-black p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        About RideRent
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-center max-w-2xl mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        At RideRent, we are committed to providing top-quality cars and bikes for rent, ensuring a seamless and enjoyable
         experience for our customers. Our fleet is well-maintained and regularly updated to meet your needs.
      </motion.p>
      <motion.img
        src={aboutImage}
        alt="About Us"
        className="w-full max-2xl: rounded-lg shadow-lg mb-0  "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
    </motion.div>
    </main>
  );
};

export default AboutPage;




