// import { Route, Routes } from "react-router-dom";
// import { Home } from "@pages/Home";
// import { NavSection } from "@pages/NavSection";
// import "./App.css";
// import { SignUp } from "@pages/SignUp";
// import { LogIn } from "@pages/LogIn";
// import { useNav } from "@lib/NavContext";
// import { SideBar } from "@pages/SideBar";
// import { LandingPage } from "@landing-page/LandingPage";

function App() {
  // const { menuOpen } = useNav();

  return (
    <>
      <p>Hello world</p>
      {/* <div className="wrapper">
        <h1>Make your show the next big thing</h1>
        <h5>
          Powerful tools from Spotify to manage and grow your audio or video
          podcast.
        </h5>
        <button>Get Started</button>
      </div> */}
      {/* <NavSection />
      {menuOpen && <SideBar />}
      <main className="min-h-[calc(100vh-var(--spacing-nav))] pt-nav">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main> */}
    </>
  );
}

export default App;
