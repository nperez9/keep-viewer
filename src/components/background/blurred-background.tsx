'use client';
import React from 'react';

import './blurred-background.css';

export interface BlurredBackgroundProps {
  children?: React.ReactNode;
}

export const BlurredBackground: React.FC<BlurredBackgroundProps> = ({ children }) => {
  return (
    <section className="bg-principal">
      <div className="gradient">{children}</div>
    </section>
  );
};
