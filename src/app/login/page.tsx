import React from 'react';
import { BlurredBackground } from '@/components/background/blurred-background';
import LoginCard from '@/components/login/login-card';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export async function Login() {
  const session = (await getServerSession()) as any;

  if (session?.user) {
    redirect('/dashboard');
  }

  return (
    <main className="relative w-screen h-screen">
      <BlurredBackground />
      <LoginCard />
    </main>
  );
}

export default Login;
