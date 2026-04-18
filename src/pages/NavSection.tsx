import { Link } from "react-router-dom";
import { Menu, X, Squircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../lib/Buttons";
import { LogInBtn } from "./LogIn";
import { SignUpBtn } from "./SignUp";
import { HomeLink } from "./Home";

export const NavSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <section className="w-full" onClick={e => {
      const target = e.target as HTMLElement

      const isActionItem = target.closest("a") || target.closest("button");

      if (menuOpen && isActionItem && !target.closest(".z-2")) {
          setMenuOpen(false);
        }
    }}>
      <nav
        className="sticky top-0 flex bg-foreground dark:bg-background h-nav px-6 
                 shadow-[10px_0_15px_var(--color-shadow)]"
      >
        <div className="flex w-full h-full items-center">
          <div className="flex gap-0.5 items-center grow font-head">
            <Squircle />
            <h1>EITA DAA</h1>
          </div>
          <ul className="hidden gap-2 lg:flex lg:grow justify-self-center text-sm">
            <li>
              <HomeLink />
            </li>
            <li>
              <Link to="/">Hero</Link>
            </li>
          </ul>
          <div className="hidden gap-5 lg:flex">
            <LogInBtn />
            <SignUpBtn />
          </div>
          <div className="flex lg:hidden z-2">
            <Button
              variant="primary"
              className="p-0 bg-transparent"
              onClick={() => setMenuOpen((menu) => !menu)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 top-nav bg-red-500 lg:hidden z-50 grow">
          <div className="flex flex-col gap-5 p-6 h-full">
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link to="/home" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Hero
                </Link>
              </li>
            </ul>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-5 gap-y-3 bg-inherit">
              <LogInBtn className="" />
              <SignUpBtn className="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
