import { Footer, Navbar } from "..";
import { MemoizedNavbar } from "@components/Navbar/MemoizedNavbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar>
        <MemoizedNavbar />
      </Navbar>

      <main>{children}</main>

      <Footer />
    </>
  );
}

export { Layout };
