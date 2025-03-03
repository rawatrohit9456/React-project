import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-8xl w-full">
      
      <p className="text-center text-gray-600 mb-4">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
      <form className="space-y-4">
        <div className="flex items-center border rounded-lg p-3">
          <FaUser className="text-gray-500 mr-3" />
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full focus:outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-3">
          <FaEnvelope className="text-gray-500 mr-3" />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full focus:outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-3">
          <FaPhone className="text-gray-500 mr-3" />
          <input 
            type="tel" 
            placeholder="Your Phone Number" 
            className="w-full focus:outline-none"
          />
        </div>
        <div className="flex items-start border rounded-lg p-3">
          <FaCommentDots className="text-gray-500 mr-3 mt-1" />
          <textarea 
            placeholder="Your Message" 
            rows="4" 
            className="w-full focus:outline-none"
          ></textarea>
        </div>
        <div className="flex items-center border rounded-lg p-3">
          <FaMapMarkerAlt className="text-gray-500 mr-3" />
          <input 
            type="text" 
            placeholder="Your City" 
            className="w-full focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="agree" className="mr-2" />
          <label htmlFor="agree" className="text-gray-600">I agree to the terms and conditions</label>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
