import { Route, Routes } from "react-router-dom";
import { Hero } from "./pages/landing-page/Hero";
import { Home } from "./pages/Home";
import { NavSection } from "./pages/NavSection";
import "./App.css";
import { SignUp } from "./pages/SignUp";
import { LogIn } from "./pages/LogIn";

function App() {
  return (
    <>
      <NavSection />
      <main >
        <Routes>
          <Route path="/" element={<Hero />} />
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
