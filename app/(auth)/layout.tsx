// app/(auth)/layout.tsx
import Footer from "../components/Footer";
import "../globals.scss";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
