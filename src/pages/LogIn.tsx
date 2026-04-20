import { Link, type LinkProps } from "react-router-dom";
import { Button } from "@lib/Buttons";

export const LogIn: React.FC = () => {
  return <h1>Log In</h1>;
};

export const LogInBtn = (props: Omit<LinkProps, "to">) => {
  return (
    <Link {...props} to="/login">
      <Button
      effect={true}
        variant="primary"
        className={`h-10 hover:bg-black/20 dark:hover:bg-white/20`}
      >
        Log In
      </Button>
    </Link>
  );
};
