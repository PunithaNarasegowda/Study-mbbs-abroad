import React, { useState } from 'react';
import { GraduationCap, Globe2, ClipboardCheck, Phone, Mail, User, MapPin } from 'lucide-react';

const countries = [
  {
    name: 'Russia',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=2000',
    fee: '$4,000 - $8,000/year'
  },
  {
    name: 'Uzbekistan',
    image: 'https://images.unsplash.com/photo-1528644495100-e7f1ba63dadb?auto=format&fit=crop&q=80&w=2000',
    fee: '$3,500 - $7,000/year'
  },
  {
    name: 'Kazakhstan',
    image: 'https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80&w=2000',
    fee: '$4,500 - $9,000/year'
  },
  {
    name: 'Philippines',
    image: 'https://images.unsplash.com/photo-1518439179742-2c3e3aad7596?auto=format&fit=crop&q=80&w=2000',
    fee: '$3,000 - $6,000/year'
  },
  {
    name: 'Georgia',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&q=80&w=2000',
    fee: '$4,000 - $8,000/year'
  },
  {
    name: 'Kyrgyzstan',
    image: 'https://images.unsplash.com/photo-1569534403760-8c20de4f49b9?auto=format&fit=crop&q=80&w=2000',
    fee: '$3,500 - $7,000/year'
  },
  {
    name: 'Egypt',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=2000',
    fee: '$5,000 - $10,000/year'
  }
];

const benefits = [
  'World-class medical education',
  'Affordable tuition fees',
  'Globally recognized degrees',
  'Modern teaching facilities',
  'Clinical exposure from year one',
  'Cultural diversity experience'
];

const steps = [
  'Complete 10+2 with PCB',
  'Clear NEET qualification',
  'Apply to universities',
  'Document verification',
  'Visa processing',
  'Pre-departure briefing'
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', country: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Study MBBS Abroad</h1>
            <p className="text-xl mb-8">Begin your journey towards becoming a global medical professional with world-class education at affordable costs.</p>
            <a href="#apply" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Study MBBS Abroad?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Countries for MBBS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <div key={country.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={country.image} alt={country.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
                  <p className="text-gray-600">Average Fee: {country.fee}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Process & Eligibility</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <User className="w-5 h-5 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Phone className="w-5 h-5 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  Preferred Country
                </label>
                <select
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Study MBBS Abroad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;