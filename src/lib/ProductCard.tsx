import { ChevronRight } from "lucide-react";
import { Button } from "./Buttons";
import { Card } from "./Card";

export const ProductCard: React.FC = () => {
  return (
    <Card variant="secondary" className="flex flex-col gap-5">
      <Card variant="secondary" children="" className="h-50" />
      <hr className="border-outline" />
      <Button
        effect={true}
        variant="primary"
        className="justify-start gap-6 hover:btn-action py-5 font-bold"
      >
        Add to Cart <ChevronRight />
      </Button>
    </Card>
  );
};

ProductCard.displayName = "ProductCard";