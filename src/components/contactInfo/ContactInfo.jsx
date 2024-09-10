import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="max-w-lg mx-auto p-spacing-2 bg-light rounded-lg shadow-lg mt-8">
      <h2 className="section-subtitle text-primary">Información de Contacto</h2>
      <ul className="space-y-3">
        <li className="flex items-center">
          <FaMapMarkerAlt className="section-subtitle-legal  mr-5" />
          <span className='li-template-contact'>Calle Inglaterra N°30-96 y Cuero y Caicedo junto a la Unidad Educativa Numa Pompilio Lliona</span>
        </li>
        <li className="flex items-center">
          <FaPhoneAlt className="section-subtitle-contact mr-5" />
          <span className='li-template-contact'>(593) 3530 230 / (593) 2522 103</span>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="section-subtitle-contact mr-5" />
          <span className='li-template-contact'>info@coacsup.com  /  coopsupltda@gmail.com</span>
        </li>
        <li className="flex items-center">
          <FaClock className="section-subtitle-contact mr-5" />
          <span className='li-template-contact'>Lunes - Viernes: 8:00 - 16:30 </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
