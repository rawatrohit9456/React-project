import React, { useState } from 'react';
import { FaCar, FaMotorcycle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import tesla2 from './assets/images/tesla2.png';
import yahamah3 from './assets/images/yahamah3.png';
import metor1 from './assets/images/metor1.png';
import scooter from './assets/images/scooter.png';
import thar from './assets/images/thar.png';
import himaliyan from './assets/images/himaliyan.jpg';

const vehicles = [
  { id: 1, type: 'Car', name: 'Tesla Model 3', description: 'Experience the future with our electric Tesla Model 3.', image: tesla2, pricePerDay: 100 },
  { id: 2, type: 'Bike', name: 'Yamaha YZF-R3', description: 'Feel the thrill with our Yamaha YZF-R3 sport bike.', image: yahamah3, pricePerDay: 50 },
  { id: 3, type: 'Bike', name: 'Royal Enfield Meteor', description: 'Enjoy comfort with our Royal Enfield Meteor.', image: metor1, pricePerDay: 60 },
  { id: 4, type: 'Scooter', name: 'Activa', description: 'Ride with ease on our Activa scooter.', image: scooter, pricePerDay: 30 },
  { id: 5, type: 'Car', name: 'Thar-5 door', description: 'Explore the Impossible with Thar.', image: thar, pricePerDay: 120 },
  { id: 6, type: 'Bike', name: 'Himalayan', description: 'Feel the thrill with our adventure bike.', image: himaliyan, pricePerDay: 70 },
];

const RentPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    city: '',
    bookAt: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    name: '',
    aadharNo: '',
    address: '',
    passport: '',
    license: ''
  });

  const handleRentNow = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsBookingFormOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Confirmed!');
    setIsBookingFormOpen(false);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Choose Your Ride</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {vehicles.map((vehicle) => (
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: vehicle.id * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            className="bg-white rounded-lg shadow-md overflow-hidden p-4 cursor-pointer transition-transform"
          >
            <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-contain rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              {vehicle.type === 'Car' ? <FaCar className="mr-2 text-black" /> : <FaMotorcycle className="mr-2 text-black" />}
              {vehicle.name}
            </h3>
            <p className="text-gray-600 mb-4">{vehicle.description}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              onClick={() => handleRentNow(vehicle)}
            >
              Rent Now
            </motion.button>
          </motion.div>
        ))}
      </div>

      {isBookingFormOpen && selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full" onClick={() => setIsBookingFormOpen(false)}>✕</button>
            <h2 className="text-2xl font-bold mb-4">Confirm Rent</h2>
            <img src={selectedVehicle.image} alt={selectedVehicle.name} className="w-full h-48 object-contain mb-4" />
            <p className="text-xl font-semibold">{selectedVehicle.name}</p>
            <p className="text-gray-600">{selectedVehicle.description}</p>
            <p className="text-lg font-bold text-blue-600">${selectedVehicle.pricePerDay} / day</p>
            <form onSubmit={handleSubmit} className="mt-4">
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <input type="text" name="aadharNo" placeholder="Aadhar Number" value={formData.aadharNo} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <input type="text" name="passport" placeholder="Passport Number (if applicable)" value={formData.passport} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" />
              <input type="text" name="license" placeholder="Driving License Number" value={formData.license} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <motion.button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition mt-2 w-full">
                Confirm Booking
              </motion.button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentPage;





