import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-blue-600 h-[500px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
          alt="Construction site"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Building Dreams Into Reality
        </h1>
        <p className="mt-4 text-xl text-white">
          Expert construction services by ER. Thamarai Selvan B.E
        </p>
      </div>
    </div>
  );
}