"use client";

import React, { useState } from 'react';
import MarkusPanel from '@/components/MarkusPanel';

export default function Onboarding() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    { name: 'Homeowner', description: 'Manage your home renovation projects.' },
    { name: 'Contractor', description: 'Track project progress and payments.' },
    { name: 'Designer', description: 'Collaborate on design plans.' },
  ];

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    // TODO: Save role to backend or local storage for user session
  };

  return (
    <div className="min-h-screen bg-slate-gray p-8">
      <h2 className="text-3xl font-heading text-victor-red mb-6">Welcome to Victor</h2>
      <p className="text-lg font-sans text-graphite mb-8">Select your role to get started:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {roles.map((role) => (
          <div
            key={role.name}
            className={`victor-card p-6 rounded-xl shadow-soft bg-white cursor-pointer hover:bg-lavender-mist transition-colors ${
              selectedRole === role.name ? 'border-2 border-victor-red' : ''
            }`}
            onClick={() => handleRoleSelect(role.name)}
            role="button"
            aria-label={`Select ${role.name} role`}
          >
            <h3 className="text-xl font-heading text-graphite">{role.name}</h3>
            <p className="text-sm text-cool-gray">{role.description}</p>
          </div>
        ))}
      </div>
      {selectedRole && (
        <p className="text-lg text-graphite mb-8">
          Selected role: <span className="font-bold text-victor-red">{selectedRole}</span>
        </p>
      )}
      <MarkusPanel />
    </div>
  );
}
