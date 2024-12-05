import React from 'react';

export function Designs() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Design Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{design.title}</h3>
                <p className="text-sm text-gray-600">{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const designs = [
  {
    title: "Modern Residential Complex",
    description: "Contemporary design with optimal space utilization",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
  },
  {
    title: "Luxury Villa Design",
    description: "Elegant architecture with premium finishes",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
  },
  {
    title: "Commercial Space",
    description: "Modern commercial building with innovative design",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
  }
];