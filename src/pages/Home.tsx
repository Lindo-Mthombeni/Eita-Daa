import { Link, type LinkProps } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export const HomeLink = (props: Omit<LinkProps, "to">) => {
  return (
    <Link
      {...props}
      to="/home"
      className="hover:text-accent transition-all duration-200 ease-out"
    >
      Home
    </Link>
  );
};
