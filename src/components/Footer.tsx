import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600" />
                <a href="tel:+919566749964" className="ml-2 text-gray-600 hover:text-blue-600">
                  +91 95667 49964
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href="mailto:senthilbuildersnamakkal@gmail.com" className="ml-2 text-gray-600 hover:text-blue-600">
                  senthilbuildersnamakkal@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="ml-2 text-gray-600">
                  4/103E, Anna Nagar, Reddipatty (PO), Namakkal (DT) - 637001
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
            <div className="mt-4 flex space-x-6">
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
      </div>
    </footer>
  );
}