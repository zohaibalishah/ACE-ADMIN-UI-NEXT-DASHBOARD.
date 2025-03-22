import {
  UserManagmentCardSection,
  UsersTable,
} from '@/app/components/UserManagement';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { ReactElement } from 'react';
export default async function UserManagementPage(): Promise<ReactElement> {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  return (
    <>
      <UserManagmentCardSection />
      <UsersTable />
    </>
  );
}
