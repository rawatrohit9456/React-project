
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import yahamah3 from './assets/images/yahamah3.png'
import scooter from './assets/images/scooter.png'
import ktm from  './assets/images/ktm.png'
import himaliyan from './assets/images/himaliyan.jpg'
import pulsar from './assets/images/pulsar.png'
import metor1 from './assets/images/metor1.png'
import tesla2 from './assets/images/tesla2.png'
import swift from './assets/images/swift.png'
import xuv from './assets/images/xuv.png'
import scorpio from './assets/images/scorpio.png'
import artica from './assets/images/artica.png'
import thar from './assets/images/thar.png'



 function Contact() {
  const availableBikes = [
    { name: "Pulsar", image: pulsar },
    { name: "Royal Enfield", image: himaliyan },
    { name: "Yamahah3 ", image:yahamah3 },
    { name: "KTM Duke", image: ktm },
    { name: "Honda Activa", image:scooter },
    { name: "Royal Enfield", image:metor1 }
  ];


  const availablecars = [
    { name: "Tesla", image: tesla2},
    { name: "ARTIGA", image: artica },
    { name: "XUV7OO ", image:xuv },
    { name: "SCORPIO", image: scorpio },
    { name: "SWIFT", image:swift },
    { name: "THAR", image:thar }
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const itemsPerSlide = 4;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? availableBikes.length - itemsPerSlide : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= availableBikes.length - itemsPerSlide ? 0 : prevIndex + 1));
  };

  const prevSlideCar = () => {
    setCurrentIndex1((prevIndex) => (prevIndex === 0 ? availablecars.length - itemsPerSlide : prevIndex - 1));
  };

  const nextSlideCar = () => {
    setCurrentIndex1((prevIndex) => (prevIndex >= availablecars.length - itemsPerSlide ? 0 : prevIndex + 1));
  };

  return (
    <main id="contact">
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 justify-center">
    


      <div className="mt-8 bg-white shadow-lg rounded-lg p-6 max-w-8xl w-full relative">
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-2xl" onClick={prevSlide}><FaArrowLeft /></button>
        <div className="flex overflow-hidden w-full">
          {availableBikes.slice(currentIndex, currentIndex + itemsPerSlide).map((bike, index) => (
            <motion.div
              key={index}
              className="w-1/4 p-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={bike.image} alt={bike.name} className="w-full h-48 object-cover rounded-lg shadow-lg" />
              <h2 className="text-center text-lg font-semibold text-blue-600 mt-2">{bike.name}</h2>
            </motion.div>
          ))}
        </div>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-2xl" onClick={nextSlide}><FaArrowRight /></button>
      </div>

      



      <div className="mt-8 bg-white shadow-lg rounded-lg p-6 max-w-8xl w-full relative">
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-2xl" onClick={prevSlideCar}><FaArrowLeft /></button>
        <div className="flex overflow-hidden w-full">
          {availablecars.slice(currentIndex1, currentIndex1 + itemsPerSlide).map((car, index) => (
            <motion.div
              key={index}
              className="w-1/4 p-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-lg shadow-lg" />
              <h2 className="text-center text-lg font-semibold text-blue-600 mt-2">{car.name}</h2>
            </motion.div>
          ))}
        </div>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-2xl" onClick={nextSlideCar}><FaArrowRight /></button>
      </div>


    


      <motion.h1 
        className="text-4xl font-bold text-blue-600 mt-12 mb-6 " 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <span>123 Bike Street, Srinagar Garhwal</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-blue-500 text-2xl" />
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <span>contact@rentride.com</span>
          </div>
          <div className="flex space-x-4 text-xl text-blue-500">
            <FaFacebook className="cursor-pointer hover:text-blue-700" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
          </div>
        </motion.div>
      </div>
    </div>









    </main>
  );
}

export default Contact