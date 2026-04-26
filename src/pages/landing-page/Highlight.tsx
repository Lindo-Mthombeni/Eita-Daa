import { Button } from "@/lib/Buttons";
import { Card } from "@/lib/Card";
import Jersey1 from "@images/Jersey 1(front).jpeg";
import Shirt3 from "@images/Shirt 3.jpeg";
import Hat from "@images/Hat.jpeg";

export const Highlight: React.FC = () => {
  const highlights = [
    {
      heading: "Dress like they can't ignore you",
      text: "Curated fits that turn heads from the moment you walk in. Every piece picked to make a statement",
      buttonText: "Browse the drop",
      img: Jersey1,
    },
    {
      heading: "Wear what they'll remember",
      text: "From streetwear to smart casual — styles built to stick in people's minds long after you've left the room",
      buttonText: "Explore lookbook",
      img: Shirt3,
    },
    {
      heading: "The fit that changes the room",
      text: "New arrivals every week. Be the first to cop the pieces everyone else will be talking about next season",
      buttonText: "Shop new arrivals",
      img: Hat,
    },
  ];

  return (
    <section className="px-[min(5%,100px)] py-[clamp(4rem,8vw,10rem)] w-full max-w-[min(100%,1400px)] mx-auto mt-[min(20vw,250px)]">
      <h1 className="text-heading text-center font-head mb-[clamp(4rem,8vw,10rem)]">
        Style that speaks before you do
      </h1>
      <div className="flex flex-col gap-40 lg:gap-[clamp(4rem,10vw,12rem)] mt-30 md:mt-[min(15vw,200px)]">
        {highlights.map(({ heading, text, buttonText, img }, index) => (
          <div
            key={index}
            className={`flex flex-col items-center lg:items-stretch gap-[clamp(1.5rem,5vw,6rem)]
          ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
          >
            <img
              src={img}
              className={`w-[min(90%,600px)] lg:w-[30%] lg:max-w-200 min-h-50 hover:scale-107 active:scale-107
                          aspect-square rounded-2xl mix-blend-multiply dark:mix-blend-normal
                          shrink-0 transition-all duration-400 ease-out`}
            />
            <Card
              variant="primary"
              className="flex-1 flex flex-col justify-center gap-4 lg:my-[3%]"
            >
              <h3 className="text-subheading">{heading}</h3>
              <p className="text-content leading-relaxed grow">{text}</p>
              <Button
                effect={true}
                variant="secondary"
                className="w-fit px-6 py-3 rounded-lg hover:text-accent active:text-accent mt-15"
              >
                {buttonText}
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
