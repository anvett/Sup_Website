import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="max-w-lg mx-auto p-spacing-2 bg-gradient-to-br from-[#000000] to-[#717175] rounded-lg shadow-lg mt-8">
      <h2 className="section-subtitle">Información de Contacto</h2>
      <ul className="space-y-3">
        <li className="flex items-center">
          <FaMapMarkerAlt className="section-subtitle-legal  mr-5" />
          <span className='li-template-contact'>15230 SW 286th St, apt 413 Homestead, FL 33033</span>
        </li>
        <li className="flex items-center">
          <FaPhoneAlt className="section-subtitle-legal mr-5" />
          <span className='li-template-contact'>(786) 683-2971</span>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="section-subtitle-legal mr-5" />
          <span className='li-template-contact'>info@ecuacleaner.com</span>
        </li>
        <li className="flex items-center">
          <FaClock className="section-subtitle-legal mr-5" />
          <span className='li-template-contact'>Lunes - Viernes: 9 AM - 6 PM</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
