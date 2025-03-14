import { LoginPage } from '../components/Login';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
const HomePage = async (): Promise<React.ReactElement> => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/admin/dashboard');
  }
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default HomePage;
