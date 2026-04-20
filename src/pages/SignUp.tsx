import { Link, type LinkProps } from "react-router-dom";
import { Button } from "@lib/Buttons";

export const SignUp: React.FC = () => {
  return <h1>Sign Up</h1>;
};

export const SignUpBtn = (props: Omit<LinkProps, "to">) => {
  return (
    <Link {...props} to="/signup">
      <Button
        effect={true}
        variant="secondary"
        className={`h-10 hover:text-accent dark:hover:bg-white/10`}
      >
        Sign Up
      </Button>
    </Link>
  );
};
