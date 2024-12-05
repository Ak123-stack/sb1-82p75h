import React from 'react';
import { Building2 } from 'lucide-react';
import { Link } from './Link';

export function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Senthil Builders</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/">Home</Link>
            <Link href="/planning">Planning</Link>
            <Link href="/designs">Designs</Link>
            <Link href="/approval">Plan Approval</Link>
            <Link href="/consulting">Consulting</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}