import { ClubCardSection } from "@/app/components/ClubManagement";

export default function ClubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ClubCardSection />
      {children}
    </section>
  );
}
