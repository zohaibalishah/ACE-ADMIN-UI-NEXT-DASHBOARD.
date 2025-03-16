import { BookingCardSection } from "@/app/components/BookingManagement";
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }

  return (
    <>
      {/* <BookingCardSection /> */}
      {children}
    </>
  );
}
