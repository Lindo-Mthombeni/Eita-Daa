import { Link } from "react-router-dom";
import { Menu, X, Squircle } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@lib/Buttons";
import { LogInBtn } from "./LogIn";
import { SignUpBtn } from "./SignUp";
import { NavLinks } from "./NavLinks";
import { useNav } from "@lib/NavContext";

export const NavSection: React.FC = () => {
  const { menuOpen, toggleMenu } = useNav();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 flex bg-foreground dark:bg-background h-nav px-6 
             shadow-[10px_0_15px_var(--color-shadow)] z-50 w-full"
      onClick={(e) => {
        const target = e.target as HTMLElement;

        const isActionItem = target.closest("a") || target.closest("button");

        if (menuOpen && isActionItem && !target.closest(".z-2")) {
          toggleMenu();
        }
      }}
    >
      <div className="flex w-full h-full items-center">
        <div className="flex gap-0.5 items-center grow font-head">
          <Squircle />
          <h1>EITA DAA</h1>
        </div>
        <ul className="hidden gap-2 lg:flex lg:grow justify-self-center text-base">
          {NavLinks.map(({ to, label }) => (
            <li key={label}>
              <Link to={to} className="text-md hover:text-accent">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden gap-5 lg:flex">
          <LogInBtn />
          <SignUpBtn />
        </div>
        <div className="flex lg:hidden z-2">
          <Button
            effect={false}
            variant="primary"
            className="p-0 bg-transparent"
            onClick={toggleMenu}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </nav>
  );
};
