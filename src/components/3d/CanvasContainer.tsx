"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the QuantumBackground with SSR disabled
const QuantumBackground = dynamic(() => import('./QuantumBackground'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 w-full h-full bg-black" />
  ),
});

export default function CanvasContainer() {
  return <QuantumBackground />;
}
