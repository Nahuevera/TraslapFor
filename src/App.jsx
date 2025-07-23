// import React, { useState } from 'react';
// import { Send, CheckCircle, Building2 } from 'lucide-react';
// import logo from './assets/logo.png';

// const ClientFormLanding = () => {
//   const [formData, setFormData] = useState({
//     nombreEmpresa: '',
//     nombrePersonaCargo: '',
//     contacto: '',
//     cuit: '',
//     email: '',
//     telefono: '',
//     direccion: '',
//     consumidorFinalIVA: '',
//     horarioCorte: '',
//     horarioColecta: '',
//     servicioFullfilment: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async () => {
//     setIsSubmitting(true);
//     setError('');

//     try {
//       // OPCIÓN 1: Usar hash MD5 de tu email (más seguro)
//       // Ve a https://www.md5hashgenerator.com/ y genera el hash de tu email
//       // Ejemplo: si tu email es "juan@empresa.com", usa el hash MD5
//       const emailHash = '4c9292f0c20eb062dc28ccaef55ba9ed'; // REEMPLAZA con el hash MD5 de tu email
//       const formSubmitUrl = `https://formsubmit.co/nahuel.vera91@gmail.com`;

//       // OPCIÓN 2 (alternativa): Usar variable de entorno si tienes backend
//       // const formSubmitUrl = `https://formsubmit.co/${process.env.REACT_APP_EMAIL_HASH}`;

//       // Preparar datos para FormSubmit
//       const formData_submit = new FormData();
//       formData_submit.append('Empresa', formData.nombreEmpresa);
//       formData_submit.append('Persona_a_cargo', formData.nombrePersonaCargo);
//       formData_submit.append('Contacto', formData.contacto);
//       formData_submit.append('CUIT', formData.cuit);
//       formData_submit.append('Email_cliente', formData.email);
//       formData_submit.append('Telefono', formData.telefono);
//       formData_submit.append('Direccion', formData.direccion);
//       formData_submit.append('Consumidor_IVA', formData.consumidorFinalIVA);
//       formData_submit.append('Horario_Corte', formData.horarioCorte);
//       formData_submit.append('Horario_Colecta', formData.horarioColecta);
//       formData_submit.append('Servicio_Fullfilment', formData.servicioFullfilment);
      
//       // Configuraciones adicionales de FormSubmit
//       formData_submit.append('_subject', '🏢 Nuevo Cliente - ' + formData.nombreEmpresa);
//       formData_submit.append('_captcha', 'false'); // Desactiva captcha
//       formData_submit.append('_template', 'table'); // Template tipo tabla
//       formData_submit.append('_next', window.location.href); // Redirect después del envío
      
//       // Respuesta automática al cliente (opcional)
//       formData_submit.append('_autoresponse', 'Gracias por contactarnos. Hemos recibido tu información.');

//       // Envío con FormSubmit
//       const response = await fetch(formSubmitUrl, {
//         method: 'POST',
//         body: formData_submit
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
        
//         // Resetear después de 3 segundos
//         setTimeout(() => {
//           setIsSubmitted(false);
//           setFormData({
//             nombreEmpresa: '',
//             nombrePersonaCargo: '',
//             contacto: '',
//             cuit: '',
//             email: '',
//             telefono: '',
//             direccion: '',
//             consumidorFinalIVA: '',
//             horarioCorte: '',
//             horarioColecta: '',
//             servicioFullfilment: ''
//           });
//         }, 3000);
//       } else {
//         throw new Error('Error al enviar el formulario');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       setError('Error al enviar el formulario. Por favor, intenta nuevamente.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center">
//         <div className="text-center p-8">
//           <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6 animate-pulse" />
//           <h2 className="text-3xl font-bold text-white mb-4">¡Formulario Enviado!</h2>
//           {/* <p className="text-purple-100 text-lg">Gracias por completar tu información.</p> */}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
//       {/* Header */}
//       <header className="bg-purple-700 shadow-2xl border-b border-purple-500">
//         <div className="max-w-7xl mx-auto px-6 py-8">
//           <div className="text-center">
//             <div className="flex items-center justify-center space-x-4 mb-4">
//               <img src={logo} alt="logo" />
//             </div>
//             <h1 className="text-purple-200 text-4xl font-extrabold mb-6 leading-tight">Planilla de altas - clientes</h1>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-12 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
//             <p className="text-xl text-purple-100">
//               Hola, a continuación les dejamos los siguientes ítems para completar. 
//               Esta planilla se utilizará para facilitar el contacto y la información entre las partes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Form Section */}
//       <section className="pb-20 px-6">
//         <div className="max-w-3xl mx-auto">
//           <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
//             <div className="space-y-8">
              
//               {error && (
//                 <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
//                   <p className="text-red-700 text-center font-semibold">{error}</p>
//                 </div>
//               )}

//               {/* Nombre de la empresa */}
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Nombre de la empresa:</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="nombreEmpresa"
//                   value={formData.nombreEmpresa}
//                   onChange={handleInputChange}
//                   placeholder="Ingresa el nombre de la empresa"
//                   className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
//                   required
//                 />
//               </div>

//               {/* Nombre de la persona a cargo de la cuenta */}
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Nombre de la persona a cargo de la cuenta:</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="nombrePersonaCargo"
//                   value={formData.nombrePersonaCargo}
//                   onChange={handleInputChange}
//                   placeholder="Ingresa el nombre de la persona a cargo"
//                   className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
//                   required
//                 />
//               </div>

//               {/* Contacto */}
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Contacto:</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="contacto"
//                   value={formData.contacto}
//                   onChange={handleInputChange}
//                   placeholder="Información de contacto adicional"
//                   className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
//                 />
//               </div>

//               {/* CUIT */}
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Cuit:</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="cuit"
//                   value={formData.cuit}
//                   onChange={handleInputChange}
//                   placeholder="XX-XXXXXXXX-X"
//                   className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
//                 />
//               </div>

//               {/* Email */}
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Email:</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="correo@empresa.com"
//                   className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
//                   required
//                 />
//               </div>

//               {/* Teléfono */}
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Teléfono:</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="telefono"
//                   value={formData.telefono}
//                   onChange={handleInputChange}
//                   placeholder="+54 11 1234-5678"
//                   className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
//                   required
//                 />
//               </div>

//               {/* Dirección */}
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Dirección:</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="direccion"
//                   value={formData.direccion}
//                   onChange={handleInputChange}
//                   placeholder="Dirección completa"
//                   className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
//                   required
//                 />
//               </div>

//               {/* Consumidor final / IVA */}
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Consumidor final / IVA:</span>
//                 </label>
//                 <select
//                   name="consumidorFinalIVA"
//                   value={formData.consumidorFinalIVA}
//                   onChange={handleInputChange}
//                   className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
//                 >
//                   <option value="">Selecciona una opción</option>
//                   <option value="consumidor_final">Consumidor Final</option>
//                   <option value="responsable_inscripto">Responsable Inscripto</option>
//                   <option value="exento">Exento</option>
//                   <option value="monotributo">Monotributo</option>
//                 </select>
//               </div>

//               {/* Horario de corte */}
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Horario de corte:</span>
//                 </label>
//                 <textarea
//                   name="horarioCorte"
//                   value={formData.horarioCorte}
//                   onChange={handleInputChange}
//                   placeholder="Especifica el horario de corte"
//                   className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 resize-none text-gray-700 text-lg"
//                   rows="3"
//                 />
//               </div>

//               {/* Horario de colecta */}
//               <div className="space-y-3">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Horario de colecta:</span>
//                 </label>
//                 <textarea
//                   name="horarioColecta"
//                   value={formData.horarioColecta}
//                   onChange={handleInputChange}
//                   placeholder="Especifica el horario de colecta"
//                   className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 resize-none text-gray-700 text-lg"
//                   rows="3"
//                 />
//               </div>

//               {/* Servicio Fullfilment */}
//               <div className="space-y-4">
//                 <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
//                   <span>Servicio Fullfilment:</span>
//                 </label>
//                 <div className="flex space-x-6">
//                   <label className="flex items-center space-x-3 cursor-pointer bg-green-50 px-6 py-4 rounded-2xl border-2 border-green-200 hover:bg-green-100 transition-colors">
//                     <input
//                       type="radio"
//                       name="servicioFullfilment"
//                       value="SI"
//                       checked={formData.servicioFullfilment === 'SI'}
//                       onChange={handleInputChange}
//                       className="w-5 h-5 text-green-600 border-2 border-green-300 focus:ring-4 focus:ring-green-100"
//                     />
//                     <span className="text-xl font-bold text-green-700 border-2 border-green-600 px-4 py-2 rounded-lg bg-white">SÍ</span>
//                   </label>

//                   <label className="flex items-center space-x-3 cursor-pointer bg-red-50 px-6 py-4 rounded-2xl border-2 border-red-200 hover:bg-red-100 transition-colors">
//                     <input
//                       type="radio"
//                       name="servicioFullfilment"
//                       value="NO"
//                       checked={formData.servicioFullfilment === 'NO'}
//                       onChange={handleInputChange}
//                       className="w-5 h-5 text-red-600 border-2 border-red-300 focus:ring-4 focus:ring-red-100"
//                     />
//                     <span className="text-xl font-bold text-red-700 border-2 border-red-600 px-4 py-2 rounded-lg bg-white">NO</span>
//                   </label>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="pt-8">
//                 <button
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-lg"
//                 >
//                   <span className="flex items-center justify-center space-x-3">
//                     {isSubmitting ? (
//                       <>
//                         <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
//                         <span>Enviando...</span>
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-6 h-6" />
//                         <span>Enviar Planilla</span>
//                       </>
//                     )}
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-purple-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <div className="flex items-center justify-center space-x-4 mb-4">
//             <img src={logo} alt="logo" />
//           </div>
//           <p className="text-purple-200 text-lg">
//             Soluciones logísticas profesionales
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ClientFormLanding;
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import logo from './assets/logo.png'

const ClientFormLanding = () => {
  const [formData, setFormData] = useState({
    nombreEmpresa: '',
    nombrePersonaCargo: '',
    contacto: '',
    cuit: '',
    email: '',
    telefono: '',
    direccion: '',
    consumidorFinalIVA: '',
    horarioCorte: '',
    horarioColecta: '',
    servicioFullfilment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['nombreEmpresa', 'nombrePersonaCargo', 'email', 'telefono', 'direccion'];
    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        setError(`Por favor completa el campo: ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingresa un email válido');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      // Web3Forms - 100% gratis, sin límites
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '4bb5ce7b-23c0-4c00-b609-edb320aeda9f', 
          from_name: formData.nombrePersonaCargo,
          subject: `🏢 Nuevo Cliente: ${formData.nombreEmpresa}`,
          email: formData.email,
          message: `
📋 DATOS DEL CLIENTE:

🏢 Empresa: ${formData.nombreEmpresa}
👤 Persona a cargo: ${formData.nombrePersonaCargo}
📞 Contacto adicional: ${formData.contacto}
🆔 CUIT: ${formData.cuit}
📧 Email: ${formData.email}
📱 Teléfono: ${formData.telefono}
📍 Dirección: ${formData.direccion}
💼 Consumidor/IVA: ${formData.consumidorFinalIVA}
⏰ Horario corte: ${formData.horarioCorte}
🚚 Horario colecta: ${formData.horarioColecta}
📦 Servicio Fullfilment: ${formData.servicioFullfilment}
          `.trim(),
          // Datos adicionales estructurados
          empresa: formData.nombreEmpresa,
          persona_cargo: formData.nombrePersonaCargo,
          contacto_adicional: formData.contacto,
          cuit: formData.cuit,
          telefono: formData.telefono,
          direccion: formData.direccion,
          consumidor_iva: formData.consumidorFinalIVA,
          horario_corte: formData.horarioCorte,
          horario_colecta: formData.horarioColecta,
          servicio_fullfilment: formData.servicioFullfilment
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        
        // Resetear después de 4 segundos
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            nombreEmpresa: '',
            nombrePersonaCargo: '',
            contacto: '',
            cuit: '',
            email: '',
            telefono: '',
            direccion: '',
            consumidorFinalIVA: '',
            horarioCorte: '',
            horarioColecta: '',
            servicioFullfilment: ''
          });
        }, 4000);
      } else {
        throw new Error(result.message || 'Error al enviar el formulario');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error al enviar el formulario. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center">
        <div className="text-center p-8">
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold text-white mb-4">¡Formulario Enviado Correctamente!</h2>
          
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      {/* Header */}
      <header className="bg-purple-700 shadow-2xl border-b border-purple-500">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="text-purple-200 text-4xl font-extrabold mb-6 leading-tight">Planilla de altas - clientes</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <p className="text-xl text-purple-100">
              Hola, a continuación les dejamos los siguientes ítems para completar. 
              Esta planilla se utilizará para facilitar el contacto y la información entre las partes.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 mb-8">
                <p className="text-red-700 text-center font-semibold">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Nombre de la empresa */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Nombre de la empresa: *</span>
                </label>
                <input
                  type="text"
                  name="nombreEmpresa"
                  value={formData.nombreEmpresa}
                  onChange={handleInputChange}
                  placeholder="Ingresa el nombre de la empresa"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
                  required
                />
              </div>

              {/* Nombre de la persona a cargo de la cuenta */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Nombre de la persona a cargo de la cuenta: *</span>
                </label>
                <input
                  type="text"
                  name="nombrePersonaCargo"
                  value={formData.nombrePersonaCargo}
                  onChange={handleInputChange}
                  placeholder="Ingresa el nombre de la persona a cargo"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
                  required
                />
              </div>

              {/* Contacto */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Contacto:</span>
                </label>
                <input
                  type="text"
                  name="contacto"
                  value={formData.contacto}
                  onChange={handleInputChange}
                  placeholder="Información de contacto adicional"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
                />
              </div>

              {/* CUIT */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>CUIT:</span>
                </label>
                <input
                  type="text"
                  name="cuit"
                  value={formData.cuit}
                  onChange={handleInputChange}
                  placeholder="XX-XXXXXXXX-X"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Email: *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="correo@empresa.com"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
                  required
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Teléfono: *</span>
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder="+54 11 1234-5678"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
                  required
                />
              </div>

              {/* Dirección */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Dirección: *</span>
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  placeholder="Dirección completa"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
                  required
                />
              </div>

              {/* Consumidor final / IVA */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Consumidor final / IVA:</span>
                </label>
                <select
                  name="consumidorFinalIVA"
                  value={formData.consumidorFinalIVA}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 text-lg"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="consumidor_final">Consumidor Final</option>
                  <option value="responsable_inscripto">Responsable Inscripto</option>
                  <option value="exento">Exento</option>
                  <option value="monotributo">Monotributo</option>
                </select>
              </div>

              {/* Horario de corte */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Horario de corte:</span>
                </label>
                <textarea
                  name="horarioCorte"
                  value={formData.horarioCorte}
                  onChange={handleInputChange}
                  placeholder="Especifica el horario de corte"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 resize-none text-gray-700 text-lg"
                  rows="3"
                />
              </div>

              {/* Horario de colecta */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Horario de colecta:</span>
                </label>
                <textarea
                  name="horarioColecta"
                  value={formData.horarioColecta}
                  onChange={handleInputChange}
                  placeholder="Especifica el horario de colecta"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 resize-none text-gray-700 text-lg"
                  rows="3"
                />
              </div>

              {/* Servicio Fullfilment */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Servicio Fullfilment:</span>
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-3 cursor-pointer bg-green-50 px-6 py-4 rounded-2xl border-2 border-green-200 hover:bg-green-100 transition-colors">
                    <input
                      type="radio"
                      name="servicioFullfilment"
                      value="SI"
                      checked={formData.servicioFullfilment === 'SI'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-green-600 border-2 border-green-300 focus:ring-4 focus:ring-green-100"
                    />
                    <span className="text-xl font-bold text-green-700 border-2 border-green-600 px-4 py-2 rounded-lg bg-white">SÍ</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer bg-red-50 px-6 py-4 rounded-2xl border-2 border-red-200 hover:bg-red-100 transition-colors">
                    <input
                      type="radio"
                      name="servicioFullfilment"
                      value="NO"
                      checked={formData.servicioFullfilment === 'NO'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-red-600 border-2 border-red-300 focus:ring-4 focus:ring-red-100"
                    />
                    <span className="text-xl font-bold text-red-700 border-2 border-red-600 px-4 py-2 rounded-lg bg-white">NO</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-lg"
                >
                  <span className="flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>Enviar Planilla</span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img src={logo} alt="logo" />
          </div>
          <p className="text-purple-200 text-lg">
            Soluciones logísticas profesionales
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ClientFormLanding;
