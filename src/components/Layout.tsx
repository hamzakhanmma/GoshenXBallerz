import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CursorTrail, ScrollProgress } from "./Effects";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        window.requestAnimationFrame(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <ScrollProgress />
      <ScrollManager />
      <CursorTrail />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
