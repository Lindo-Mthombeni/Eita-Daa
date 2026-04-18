import { Link } from "react-router-dom";
import { Button } from "../lib/Buttons";

export const LogIn: React.FC = () => {
  return <h1>Log In</h1>;
};



export const LogInBtn = ({className}: {className?: string}) => {
  return (
    <Link to="/login" className={className}>
      <Button
        variant="primary"
        className={`h-10 hover:bg-black/20 dark:hover:bg-black/30 hover:scale-105`}
      >
        Log In
      </Button>
    </Link>
  );
};
