import MobileTabs from "@components/MobileTabs";

function MainContent({ children }: { children: React.ReactNode }) {
  return <main id="main-content">{children}</main>;
}

function Footer() {
  return (
    <footer
      id="footer"
      className="px-7 py-5"
    >
      <MobileTabs />
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
}
