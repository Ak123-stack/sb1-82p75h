import React from 'react';
import { Lightbulb, TrendingUp, Building, HeartHandshake } from 'lucide-react';

export function Consulting() {
  return (
    <div className="pt-16">
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Construction Consulting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
                <service.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const consultingServices = [
  {
    icon: Lightbulb,
    title: "Expert Advice",
    description: "Professional guidance on construction methods, materials, and best practices."
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "Strategic planning to optimize construction costs without compromising quality."
  },
  {
    icon: Building,
    title: "Project Assessment",
    description: "Comprehensive evaluation of construction projects and feasibility studies."
  },
  {
    icon: HeartHandshake,
    title: "Client Support",
    description: "Dedicated support throughout the construction process with regular consultations."
  }
];