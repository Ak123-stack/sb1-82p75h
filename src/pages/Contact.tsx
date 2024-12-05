import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600" />
                <a href="tel:+919566749964" className="ml-3 text-gray-600 hover:text-blue-600">
                  +91 95667 49964
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href="mailto:senthilbuildersnamakkal@gmail.com" className="ml-3 text-gray-600 hover:text-blue-600">
                  senthilbuildersnamakkal@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="ml-3 text-gray-600">
                  4/103E, Anna Nagar, Reddipatty (PO), Namakkal (DT) - 637001
                </span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <a
                  href="https://wa.me/919566749964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/senthil__builders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}