'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const LoginButton = () => {
  const session = useSession();
  console.info('session', session);

  return (
    <>
      <button onClick={() => signIn('google')}>
        Sign in {session?.data ? 'LOGGED' : 'NOT LOGGED'}
      </button>
      <button onClick={() => signOut()}>Sing Out</button>
    </>
  );
};

export default LoginButton;
