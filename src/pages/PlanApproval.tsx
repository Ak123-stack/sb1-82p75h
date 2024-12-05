import React from 'react';
import { FileCheck, Shield, Clock, FileText } from 'lucide-react';

export function PlanApproval() {
  return (
    <div className="pt-16">
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Plan Approval Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approvalSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <step.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const approvalSteps = [
  {
    icon: FileCheck,
    title: "Documentation Review",
    description: "Thorough review of all required documents and plans to ensure compliance with local regulations."
  },
  {
    icon: Shield,
    title: "Compliance Check",
    description: "Verification of plans against building codes and zoning regulations."
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Efficient processing of approval applications with minimal turnaround time."
  },
  {
    icon: FileText,
    title: "Complete Assistance",
    description: "End-to-end support in obtaining necessary permits and approvals."
  }
];