import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Rocket, Users, Target, Award, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, CheckCircle, Star, Menu, X } from 'lucide-react'
import AdminPanel from './components/AdminPanel'

interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
  bio: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      firstName: 'Ana',
      lastName: 'García',
      position: 'CEO & Fundadora',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experta en estrategia digital con más de 10 años de experiencia en marketing y crecimiento empresarial.'
    },
    {
      id: '2',
      firstName: 'Carlos',
      lastName: 'Rodríguez',
      position: 'Director Creativo',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Diseñador gráfico y especialista en branding con un enfoque innovador en experiencias visuales impactantes.'
    },
    {
      id: '3',
      firstName: 'María',
      lastName: 'López',
      position: 'Especialista en Marketing Digital',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experta en campañas digitales y análisis de datos con certificaciones en Google Ads y Facebook Marketing.'
    },
    {
      id: '4',
      firstName: 'David',
      lastName: 'Martínez',
      position: 'Desarrollador Full Stack',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Desarrollador con experiencia en React, Node.js y tecnologías cloud para crear soluciones web escalables.'
    }
  ]

  const services: Service[] = [
    {
      id: '1',
      title: 'Marketing Digital',
      description: 'Estrategias integrales de marketing digital para hacer crecer tu negocio online.',
      icon: Target,
      features: ['SEO/SEM', 'Redes Sociales', 'Email Marketing', 'Analytics']
    },
    {
      id: '2',
      title: 'Desarrollo Web',
      description: 'Sitios web modernos y aplicaciones web personalizadas para tu empresa.',
      icon: Rocket,
      features: ['Diseño Responsivo', 'E-commerce', 'CMS', 'Optimización']
    },
    {
      id: '3',
      title: 'Branding & Diseño',
      description: 'Creamos identidades visuales únicas que conectan con tu audiencia.',
      icon: Award,
      features: ['Logo Design', 'Identidad Corporativa', 'Material Gráfico', 'UI/UX']
    },
    {
      id: '4',
      title: 'Consultoría Digital',
      description: 'Asesoramiento estratégico para optimizar tu presencia digital.',
      icon: Users,
      features: ['Auditoría Digital', 'Estrategia', 'Transformación', 'Capacitación']
    }
  ]

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Laura Fernández',
      position: 'CEO',
      company: 'TechStart',
      content: 'MelxAgency transformó completamente nuestra presencia digital. Los resultados superaron nuestras expectativas.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '2',
      name: 'Roberto Silva',
      position: 'Director de Marketing',
      company: 'InnovateCorp',
      content: 'El equipo de MelxAgency es excepcional. Su enfoque estratégico nos ayudó a duplicar nuestras ventas online.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '3',
      name: 'Carmen Ruiz',
      position: 'Fundadora',
      company: 'EcoSolutions',
      content: 'Profesionales, creativos y orientados a resultados. Recomiendo MelxAgency sin dudarlo.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Rocket className="w-8 h-8 text-[#0e368d]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#0e368d] to-[#942ace] bg-clip-text text-transparent">
                MelxAgency
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-[#0e368d] transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-[#0e368d] transition-colors">Servicios</a>
              <a href="#equipo" className="text-gray-700 hover:text-[#0e368d] transition-colors">Equipo</a>
              <a href="#testimonios" className="text-gray-700 hover:text-[#0e368d] transition-colors">Testimonios</a>
              <a href="#contacto" className="bg-gradient-to-r from-[#0e368d] to-[#942ace] text-white px-6 py-2 rounded-full hover:from-[#0c2d75] hover:to-[#7a2299] transition-all duration-300">
                Contacto
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#0e368d] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-[#0e368d] transition-colors">Inicio</a>
                <a href="#servicios" className="text-gray-700 hover:text-[#0e368d] transition-colors">Servicios</a>
                <a href="#equipo" className="text-gray-700 hover:text-[#0e368d] transition-colors">Equipo</a>
                <a href="#testimonios" className="text-gray-700 hover:text-[#0e368d] transition-colors">Testimonios</a>
                <a href="#contacto" className="bg-gradient-to-r from-[#0e368d] to-[#942ace] text-white px-6 py-2 rounded-full hover:from-[#0c2d75] hover:to-[#7a2299] transition-all duration-300 text-center">
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 bg-gradient-to-br from-[#0e368d]/5 to-[#942ace]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transformamos tu
              <span className="block bg-gradient-to-r from-[#0e368d] to-[#942ace] bg-clip-text text-transparent">
                Presencia Digital
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Somos una agencia digital especializada en crear experiencias excepcionales que impulsan el crecimiento de tu negocio en el mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contacto" className="bg-gradient-to-r from-[#0e368d] to-[#942ace] text-white px-8 py-4 rounded-full font-semibold hover:from-[#0c2d75] hover:to-[#7a2299] transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Comenzar Proyecto
              </a>
              <a href="#servicios" className="border-2 border-[#0e368d] text-[#0e368d] px-8 py-4 rounded-full font-semibold hover:bg-[#0e368d] hover:text-white transition-all duration-300">
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales para llevar tu negocio al siguiente nivel digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0e368d]/10 to-[#942ace]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#0e368d] group-hover:text-[#942ace] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 bg-gradient-to-t from-[#0e368d]/5 to-[#942ace]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales apasionados comprometidos con el éxito de tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.firstName} ${member.lastName}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.firstName} {member.lastName}
                  </h3>
                  <p className="text-[#942ace] font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-[#0e368d]/10 to-[#942ace]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contáctanos hoy y descubre cómo podemos impulsar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e368d] focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e368d] focus:border-transparent"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e368d] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e368d] focus:border-transparent">
                    <option>Selecciona un servicio</option>
                    <option>Marketing Digital</option>
                    <option>Desarrollo Web</option>
                    <option>Branding & Diseño</option>
                    <option>Consultoría Digital</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e368d] focus:border-transparent"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0e368d] to-[#942ace] text-white py-3 rounded-lg font-semibold hover:from-[#0c2d75] hover:to-[#7a2299] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Enviar Mensaje</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-[#0e368d]" />
                    <span className="text-gray-700">contacto@melxagency.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-[#0e368d]" />
                    <span className="text-gray-700">+34 123 456 789</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-[#0e368d]" />
                    <span className="text-gray-700">Madrid, España</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#0e368d] text-white rounded-full flex items-center justify-center hover:bg-[#0c2d75] transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#0e368d] text-white rounded-full flex items-center justify-center hover:bg-[#0c2d75] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#942ace] text-white rounded-full flex items-center justify-center hover:bg-[#7a2299] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#942ace] text-white rounded-full flex items-center justify-center hover:bg-[#7a2299] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="w-8 h-8 text-[#942ace]" />
                <span className="text-xl font-bold">MelxAgency</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Transformamos ideas en experiencias digitales excepcionales que impulsan el crecimiento de tu negocio.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desarrollo Web</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Branding & Diseño</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultoría Digital</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>contacto@melxagency.com</li>
                <li>+34 123 456 789</li>
                <li>Madrid, España</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 MelxAgency. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}