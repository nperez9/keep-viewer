import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Login() {
  return (
    <Card className="mx-auto max-w-sm mt-52">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Ingress with your google account to visualize better your keep notes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button className="w-full">Login with Google</Button>
          <div className="m-2 text-center text-sm text-neutral-500">
            Don&apos;t have an account?{' '}
          </div>
          <Button variant="outline" className="w-full">
            View it default data
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Login;
