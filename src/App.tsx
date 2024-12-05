import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Planning } from './pages/Planning';
import { Designs } from './pages/Designs';
import { PlanApproval } from './pages/PlanApproval';
import { Consulting } from './pages/Consulting';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Planning />
        <Designs />
        <PlanApproval />
        <Consulting />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;