import { Footer, Navbar } from "..";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />

      <main className="bg-gray-700">{children}</main>

      <Footer />
    </>
  );
};

export { Layout };
