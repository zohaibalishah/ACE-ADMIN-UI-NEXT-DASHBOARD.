import { BookingCardSection } from "@/app/components/BookingManagement";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BookingCardSection />
      {children}
    </>
  );
}
