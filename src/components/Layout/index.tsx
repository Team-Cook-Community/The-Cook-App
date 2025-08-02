import MobileTabs from "@components/MobileTabs";
import Navbar from "@components/Navbar";

function MainContent({ children }: { children: React.ReactNode }) {
  return <main id="main-content">{children}</main>;
}

function Footer() {
  return (
    <footer id="footer" className="border-t border-t-default-200">
      <MobileTabs />
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
}
