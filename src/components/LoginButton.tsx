'use client';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';

const LoginButton = () => {
  const { data: session } = useSession();

  return <button onClick={() => signIn('google')}>Sign in {session ? 'LOGGED' : 'NOT LOGGED'}</button>;
};

export default LoginButton;
