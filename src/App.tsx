import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { useRevealObserver } from "./lib/hooks";

const About = lazy(() => import("./pages/About"));
const Coaching = lazy(() => import("./pages/Coaching"));
const PlayerDevelopment = lazy(() => import("./pages/PlayerDevelopment"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div className="page-fallback">
      <span className="page-fallback__ball" />
      <span>Loading</span>
    </div>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  useRevealObserver([children]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={<PageFallback />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Page>
                  <Home />
                </Page>
              }
            />
            <Route
              path="/about"
              element={
                <Page>
                  <About />
                </Page>
              }
            />
            <Route
              path="/coaching"
              element={
                <Page>
                  <Coaching />
                </Page>
              }
            />
            <Route
              path="/player-development"
              element={
                <Page>
                  <PlayerDevelopment />
                </Page>
              }
            />
            <Route
              path="/gallery"
              element={
                <Page>
                  <GalleryPage />
                </Page>
              }
            />
            <Route
              path="/contact"
              element={
                <Page>
                  <Contact />
                </Page>
              }
            />
            <Route
              path="/privacy"
              element={
                <Page>
                  <Privacy />
                </Page>
              }
            />
            <Route
              path="*"
              element={
                <Page>
                  <NotFound />
                </Page>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}
