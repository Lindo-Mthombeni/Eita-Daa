import { useNav } from "@/lib/NavContext";
import { Link } from "react-router-dom";
import { LogInBtn } from "./LogIn";
import { SignUpBtn } from "./SignUp";
import { NavLinks } from "./NavLinks";

export const SideBar: React.FC = () => {
  const { toggleMenu } = useNav();

  return (
    <div
      className="fixed inset-0 top-nav bg-foreground dark:bg-background lg:hidden z-60 grow"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a, button")) toggleMenu();
      }}
    >
      <div className="flex flex-col gap-5 p-6 h-full">
        <ul className="flex flex-col gap-2 text-base">
          {NavLinks.map(({ to, label }) => (
            <li key={label}>
              <Link
                to={to}
                className="block py-2 hover:text-accent font-bold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
                        gap-x-5 gap-y-3 bg-inherit mt-auto pb-10"
        >
          <LogInBtn />
          <SignUpBtn />
        </div>
      </div>
    </div>
  );
};
