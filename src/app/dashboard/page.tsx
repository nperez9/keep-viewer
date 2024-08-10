import AuthWrapper from '@/components/auth/AuthWrapper';
import { DashboardMain } from '@/components/dashboard/DashboardMain';
import React from 'react';

export const Dashboard = async () => {
  return (
    <main>
      <AuthWrapper>
        <DashboardMain />
      </AuthWrapper>
    </main>
  );
};

export default Dashboard;
