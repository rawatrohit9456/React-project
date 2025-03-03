import React from 'react';
import { FaCar, FaMotorcycle } from 'react-icons/fa';
import tesla2 from './assets/images/tesla2.png'
import yahamah3 from './assets/images/yahamah3.png'
import metor1 from './assets/images/metor1.png'
import scooter from './assets/images/scooter.png'
import thar from './assets/images/thar.png'
import himaliyan from './assets/images/himaliyan.jpg'
import { Link } from "react-router-dom";

function MainContent() {
  const vehicles = [
    {
      id: 1,
      type: 'Car',
      name: 'Tesla Model 3',
      description: 'Experience the future with our electric Tesla Model 3.',
      image: tesla2,
      
    
      
       },

    {
      id: 2,
      type: 'Bike',
      name: 'Yamaha YZF-R3',
      description: 'Feel the thrill with our Yamaha YZF-R3 sport bike.',
      image: yahamah3,
    
    },
    {
      id: 3,
      type: 'Bike',
      name: 'Royal ENfield Meteor ',
      description: 'Feel the comfort with our ROyal Enfirld bike.',
      image: metor1,
    },
    {
      id: 4,
      type: 'scooter',
      name: 'Activa',
      description: 'Feel the comfort with our scooter.',
      image: scooter,
    },
    {
      id: 5,
      type: 'Car',
      name: 'Thar-5 door',
      description: 'Explore the Impossible.',
      image: thar,
    },
    {
      id: 6,
      type: 'Bike',
      name: 'Himaliyan',
      description: 'Feel the thrill with our touring bike.',
      image: himaliyan,
    },

  ];

  return (
    <main id="services" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Vehicles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden ">
            <img src={vehicle.image} alt={vehicle.name} className="w-full h-64 object-contain hover:scale-130 transition-transform"  />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 flex items-center">
                {vehicle.type ==='Car'? <FaCar className="mr-2" /> : <FaMotorcycle className="mr-2" /> }
                {vehicle.name}
              </h3>
              <p className="text-gray-700 mb-4">{vehicle.description}</p>
              <Link to="/rent-now">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">Rent Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainContent;
