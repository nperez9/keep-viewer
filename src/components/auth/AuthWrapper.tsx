'use client';
import React, { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Loading } from '@/components/loading';

export const AuthWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const session = useSession();

  if (!session || session?.status === 'loading') {
    return <Loading />;
  }

  if (session?.status !== 'authenticated') {
    redirect('/login');
  }

  console.log('session', session);

  return <>{children}</>;
};

export default AuthWrapper;
