import React from 'react';
import { BlurredBackground } from '@/components/background/blurred-background';
import { Card } from '@/components/ui/card';
import LoginCard from '@/components/login/login-card';

export function Login() {
  return (
    <main className="relative w-screen h-screen">
      <BlurredBackground />
      <LoginCard />
    </main>
  );
}

export default Login;
