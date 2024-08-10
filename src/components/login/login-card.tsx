'use client';
import { signIn, useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { redirect } from 'next/navigation';

export const LoginCard = () => {
  const session = useSession();

  const handleLogin = () => {
    signIn('google');
  };

  if (session?.status === 'authenticated') {
    redirect('/dashboard');
  }

  return (
    <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md border-neutral-400 rounded">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Ingress with your google account to visualize better your keep notes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button className="w-full" onClick={handleLogin}>
            Login with Google
          </Button>
          <div className="m-2 text-center text-sm text-neutral-500">
            Don&apos;t have an account?
          </div>
          <Button variant="outline" className="w-full">
            View it default data
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
