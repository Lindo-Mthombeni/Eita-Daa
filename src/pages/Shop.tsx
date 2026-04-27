import { Button } from "@/lib/Buttons";
import { Link, type LinkProps } from "react-router-dom";

export const Shop: React.FC = () => {
  return <h1>Shop</h1>;
};

export const ShopBtn = ({ className, ...props }: Omit<LinkProps, "to">) => {
  return (
    <Link {...props} to="/shop">
      <Button
        effect={true}
        variant="primary"
        className={`
                   w-full active:bg-transparent border-2 border-transparent 
                   hover:text-accent active:border-white active:text-accent h-fit
                   ${className}
                  `}
      >
        Shop Now
      </Button>
    </Link>
  );
};
