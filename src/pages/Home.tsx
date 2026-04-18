import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export const HomeLink = ({className}: {className?: string}) => {
  return (
    <Link to="/home" className={className}>Home</Link>
  )
}

