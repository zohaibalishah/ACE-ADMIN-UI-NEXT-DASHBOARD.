import "@/app/styles/styles.css";
import "@/app/styles/globals.css";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#8BA70D" showSpinner={false} height={4} />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "ACE Admin Dashboard",
  description: "ACE Admin Dashboard",
};
