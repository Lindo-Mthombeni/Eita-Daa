import { Link } from "react-router-dom";
import { Button } from "../lib/Buttons";

export const SignUp: React.FC = () => {
  return <h1>Sign Up</h1>;
};

export const SignUpBtn = ({ className }: { className?: string }) => {
  return (
    <Link to="/signup" className={className}>
      <Button
        variant="secondary"
        className={`h-10 border-2 not-dark:hover:text-accent hover:scale-105 dark:hover:bg-white/20`}
      >
        Sign Up
      </Button>
    </Link>
  );
};

//#746dff accent

// rgb(150, 145, 255)  CHECK

// rgb(207, 245, 106) Check
