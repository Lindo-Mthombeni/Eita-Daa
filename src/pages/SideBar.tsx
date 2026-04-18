import { useNav } from "@/lib/NavContext";
import { Link } from "react-router-dom"
import { LogInBtn } from "./LogIn";
import { SignUpBtn } from "./SignUp";

export const SideBar: React.FC = () => {

    const { toggleMenu } = useNav();

    return (
        <div className="fixed inset-0 top-nav bg-red-500 lg:hidden z-50 grow">
          <div className="flex flex-col gap-5 p-6 h-full">
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link to="/home" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" onClick={toggleMenu}>
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
    )
}