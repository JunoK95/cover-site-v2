import { useEffect, useState } from "react";
import "./App.css";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Works from "./components/Works";
import Process from "./components/Process";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [revealed, setRevealed] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    const t = setTimeout(() => {
      setRevealed(true);
      document.body.style.backgroundColor =
        theme === "dark" ? "#0a0a0a" : "#f9f8f6";
    }, 1600);
    return () => clearTimeout(t);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.body.style.backgroundColor =
      next === "dark" ? "#0a0a0a" : "#f9f8f6";
  };

  const activeTheme = revealed ? theme : "dark";
  const bg = activeTheme === "dark" ? "#0a0a0a" : "#f9f8f6";

  return (
    <div
      className="min-h-screen"
      data-theme={activeTheme}
      style={{ background: bg }}
    >
      {/* Diagonal wipe overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#0a0a0a",
          zIndex: 45,
          pointerEvents: "none",
          clipPath: revealed
            ? "polygon(100% 0%, 100% 0%, 0% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          transition: "clip-path 0.7s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      />
      <Cursor />
      <Navbar theme={revealed ? theme : "dark"} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Works />
        <Process />
        <Skills />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
