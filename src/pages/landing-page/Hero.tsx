import { ArrowRight } from "lucide-react";
import Logo from "@images/Logo.jpeg";
import { Button } from "@lib/Buttons";
import { Link } from "react-router-dom";
import { useNav } from "@/lib/NavContext";

export const Hero: React.FC = () => {

  return (
    <section
      className="relative w-full overflow-hidden bg-background flex flex-col
                 pb-20 pl-6 lg:pl-[min(5%,250px)]"
      style={{ height: "calc(100svh - 80px)" }}
    >
      <div
        className="absolute inset-0 h-full w-full bg-center bg-no-repeat 
                   lg:bg-contain bg-cover mix-blend-multiply dark:invert 
                   dark:mix-blend-screen contrast-150
                   opacity-65 will-change-transform"
        style={{
          backgroundImage: `url(${Logo})`,
          transform: 'translateZ(0)',
        }}
      ></div>
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-transparent" />

      <div className="mt-auto z-5 flex flex-col mb-15 text-fixed min-h-75">
        <h1 className="text-lg font-head italic">Wear What</h1>
        <div className="text-lg leading-lg font-black">
          <p>
            <span className=" font-brand text-xxl">T</span>urns <br />
          </p>
          <p className="">
            <span className=" font-brand text-xxl">H</span>eads
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 z-5 w-full max-w-200 pr-15 gap-y-6 gap-x-8"
      >
        <Link to="/shop">
        <Button
          variant="primary"
          className="relative px-10 py-4 bg-white text-black text-sm
                       font-black overflow-hidden hover:text-accent/90
                       hover:bg-transparent border-2 border-fixed"
        >
          SHOP NOW
        </Button>
        </Link>
        <Link
         to="/explore"
          className="px-5 py-4 text-fixed font-black border-b-2 
                     border-fixed flex items-center
                     dark:hover:bg-white/10"
        >
          <span>EXPLORE</span> <ArrowRight className="stroke-fixed" />
        </Link>
      </div>
    </section>
  );
};
