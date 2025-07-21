import React, { useState } from 'react';
import { Send, CheckCircle, Building2 } from 'lucide-react';
import logo from './assets/logo.png'; 

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
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Función para codificar datos para Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "client-form",
          ...formData
        })
      });

      if (response.ok) {
        console.log('Datos del formulario enviados:', formData);
        setIsSubmitted(true);
        
        // Resetear después de 3 segundos
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
        }, 3000);
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitError('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center">
        <div className="text-center p-8">
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold text-white mb-4">¡Formulario Enviado!</h2>
          <p className="text-purple-100 text-lg">Gracias por completar tu información. Te contactaremos pronto.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      {/* FORMULARIO OCULTO PARA NETLIFY - MUY IMPORTANTE */}
      <form 
        name="client-form" 
        netlify 
        netlify-honeypot="bot-field" 
        hidden
      >
        <input type="text" name="nombreEmpresa" />
        <input type="text" name="nombrePersonaCargo" />
        <input type="text" name="contacto" />
        <input type="text" name="cuit" />
        <input type="email" name="email" />
        <input type="tel" name="telefono" />
        <input type="text" name="direccion" />
        <select name="consumidorFinalIVA">
          <option value="consumidor_final">Consumidor Final</option>
          <option value="responsable_inscripto">Responsable Inscripto</option>
          <option value="exento">Exento</option>
          <option value="monotributo">Monotributo</option>
        </select>
        <textarea name="horarioCorte"></textarea>
        <textarea name="horarioColecta"></textarea>
        <input type="radio" name="servicioFullfilment" value="SI" />
        <input type="radio" name="servicioFullfilment" value="NO" />
      </form>

      {/* Header */}
      <header className="bg-purple-700 shadow-2xl border-b border-purple-500">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="text-purple-200 text-4xl font-extrabold mb-6 leading-tight">Planilla de altas - clientes</h1>
            <div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
            Planilla de altas - clientes
          </h2> */}
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
            <div className="space-y-8">
              {/* Error message */}
              {submitError && (
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
                  <p className="text-red-700 text-center">{submitError}</p>
                </div>
              )}

              {/* Nombre de la empresa */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-bold text-purple-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Nombre de la empresa:</span>
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
                  <span>Nombre de la persona a cargo de la cuenta:</span>
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
                  <span>Cuit:</span>
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
                  <span>Email:</span>
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
                  <span>Teléfono:</span>
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
                  <span>Dirección:</span>
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
                  onClick={handleSubmit}
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img src={logo} alt="logo" className=' text-purple-300'/>
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