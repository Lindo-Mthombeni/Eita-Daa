import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { OverlayScrollbars } from "overlayscrollbars";
import { Home } from "@pages/Home";
import { NavSection } from "@pages/NavSection";
import { SignUp } from "@pages/SignUp";
import { LogIn } from "@pages/LogIn";
import { useNav } from "@lib/NavContext";
import { SideBar } from "@pages/SideBar";
import { LandingPage } from "@landing-page/LandingPage";
import "./App.css";

function App() {
  const { menuOpen } = useNav();

  useEffect(() => {
    const instance = OverlayScrollbars(document.body, {
      scrollbars: { autoHide: "scroll" },
    });

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => instance.destroy();
  }, [menuOpen]);

  return (
    <>
      <NavSection />
      {menuOpen && <SideBar />}
      <main className="min-h-[calc(100vh-var(--spacing-nav))] pt-nav
                      selection:bg-accent selection:text-white selection:stroke-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
