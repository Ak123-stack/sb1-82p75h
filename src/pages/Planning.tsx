import React from 'react';
import { Ruler, ClipboardCheck, Clock, Users } from 'lucide-react';

export function Planning() {
  return (
    <div className="pt-16">
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Construction Planning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {planningServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
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

const planningServices = [
  {
    icon: Ruler,
    title: "Detailed Architecture Planning",
    description: "Expert architectural planning with modern design principles and practical considerations for your dream project."
  },
  {
    icon: ClipboardCheck,
    title: "Construction Management",
    description: "Comprehensive construction management services ensuring quality, timeline adherence, and cost optimization."
  },
  {
    icon: Clock,
    title: "Timeline Planning",
    description: "Efficient project timeline planning with realistic milestones and systematic execution strategies."
  },
  {
    icon: Users,
    title: "Team Coordination",
    description: "Professional coordination between architects, engineers, and construction teams for seamless execution."
  }
];