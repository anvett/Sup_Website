// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     const phoneNumber = '+593984773063';
//     const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`;
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//     if (typeof window !== "undefined") {
//       window.open(whatsappUrl, '_blank');
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-[#000000] to-[#717175] rounded-lg shadow-lg">
//       <h2 className="section-subtitle mb-4">Contáctanos</h2>
//       <form className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Nombre"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-primary"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Correo electrónico"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-primary"
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Teléfono"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-primary"
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Mensaje"
//           rows="4"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-primary"
//           required
//         />
//         <button
//           type="button"
//           onClick={handleSubmit}
//           className="main-button mt-4 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Enviar Mensaje a WhatsApp
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });
//   const [linkReady, setLinkReady] = useState(false);
//   const [whatsappLink, setWhatsappLink] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const phoneNumber = '+593984773063';
//     const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`;
//     const encodedMessage = encodeURIComponent(message); // Asegurarse de codificar correctamente el mensaje
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
//     setWhatsappLink(whatsappUrl);
//     setLinkReady(true);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-[#000000] to-[#717175] rounded-lg shadow-lg">
//       <h2 className="section-subtitle mb-4">Contáctanos</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Inputs */}
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
//         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" required />
//         <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" />
//         <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" required></textarea>
        
//         <button type="submit" className="main-button mt-4">Preparar Mensaje</button>
//       </form>
//       {linkReady && (
//         <div className="mt-4">
//           <p>Tu mensaje está listo para ser enviado:</p>
//           <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-send-link">Enviar Mensaje a WhatsApp</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;

// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });
//   const [linkReady, setLinkReady] = useState(false);
//   const [whatsappLink, setWhatsappLink] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const phoneNumber = '+593984773063';
//     const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
//     setWhatsappLink(whatsappUrl);
//     setLinkReady(true);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-[#000000] to-[#717175] rounded-lg shadow-lg">
//       <h2 className="section-subtitle mb-4 text-white">Contáctanos</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" className="input input-bordered w-full max-w-xs" required />
//         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" className="input input-bordered w-full max-w-xs" required />
//         <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" className="input input-bordered w-full max-w-xs" />
//         <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" className="bg-light textarea textarea-bordered w-full max-w-xs" required></textarea>
        
//         <button type="submit" className="btn btn-primary w-full">Preparar Mensaje</button>
//       </form>
//       {linkReady && (
//         <div className="mt-4">
//           <p className='text-light'>Tu mensaje está listo para ser enviado:</p>
//           <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full">Enviar Mensaje a WhatsApp</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [linkReady, setLinkReady] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '+593984773063';
    const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    setWhatsappLink(whatsappUrl);
    setLinkReady(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-[#000000] to-[#717175] rounded-lg shadow-lg">
      <h2 className="section-subtitle mb-4 text-white">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required
          className="input input-bordered w-full max-w-xs bg-light text-primary"
        />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" required
          className="input input-bordered w-full max-w-xs bg-light text-primary"
        />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono"
          className="input input-bordered w-full max-w-xs bg-light text-primary"
        />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" required
          className="textarea textarea-bordered w-full max-w-xs bg-light text-dark"
        ></textarea>
        
        <button type="submit" className="btn btn-primary w-full">Preparar Mensaje</button>
      </form>
      {linkReady && (
        <div className="mt-4">
          <p className='text-light'>Tu mensaje está listo para ser enviado:</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-primary btn btn-primary w-full">Enviar Mensaje a WhatsApp</a>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
