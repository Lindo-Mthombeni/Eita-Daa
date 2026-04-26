// import { ArrowRight } from "lucide-react";
import Logo from "@images/Logo.webp";
import { Button } from "@lib/Buttons";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-background"
      style={{ height: "calc(100svh - var(--spacing-nav))" }}
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-size-[auto_100%] bg-center
                   opacity-30 dark:opacity-70 not-dark:mix-blend-multiply dark:invert-100"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div
        className="absolute inset-0 dark:bg-linear-to-b z-10
                    dark:from-black/80 dark:via-black/50 dark:to-black/90"
      />
      <div
        className="absolute inset-0 dark:bg-linear-to-r z-10
                     dark:from-black/60 dark:via-transparent dark:to-black/60"
      />
      <div className="relative h-full w-full z-11 flex flex-col items-center justify-center">
        <div className="w-full pl-grow flex flex-col">
          <h2 className="text-head italic text-start w-full">Wear What</h2>
          <div className="flex flex-col items-start w-full">
            <h1 className="leading-lg flex items-center">
              <span className="text-highlight">T</span>urns
            </h1>
            <h1 className="leading-lg flex items-center">
              <span className="text-highlight">H</span>eads
            </h1>
          </div>
          <div className="w-full">
            <h5 className="w-[min(55vw,25rem)]">
              Discover the latest trends in fashion that make a statement
            </h5>
          </div>
          <div
            className="mt-grow px-5 gap-10 gap-x-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
                        w-[min(70%,50rem)]"
          >
            <Link to="/shop">
              <Button
                effect={true}
                variant="primary"
                className="bg-same dark:text-black w-full active:bg-transparent border-2 
                        border-transparent hover:text-accent active:border-white
                        hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-same)_80%,transparent)]
                        dark:hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-same)_40%,transparent)]"
              >
                Shop Now
              </Button>
            </Link>
            <Link to="/explore">
              <Button
                effect={false}
                variant="secondary"
                className="relative w-full flex justify-start border-0 rounded-none group"
              >
                Explore
                <div
                  className="absolute inset-0 right-[90%] top-auto -bottom-1 h-1 
                            group-hover:bg-black dark:group-hover:bg-same
                               group-hover:right-0 transition-all ease-in-out duration-300"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* <img
          src={Logo}
          alt="Eita Daa Logo"
          className="absolute inset-0 h-full object-cover sm:object-contain opacity-30"
        /> */}

      {/* Gradient Overlays
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div> */}

      {/* Decorative Elements
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div> */}

      {/* Main Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center"> */}
      {/* Animated Badge */}
      {/* <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-8 animate-fade-in-down">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <span className="text-yellow-400 text-sm font-medium tracking-wider">NEW COLLECTION 2024</span>
          </div> */}

      {/* Main Heading */}

      {/* CTA Buttons
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12 animate-fade-in-up animation-delay-600">
            <Link to="/shop" className="w-full sm:w-auto group">
              <Button
                effect={false}
                variant="primary"
                className="relative px-10 py-5 bg-yellow-400 text-black font-black text-lg overflow-hidden
                           hover:bg-yellow-300 transition-all duration-500 transform hover:scale-105
                           shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_50px_rgba(250,204,21,0.5)]
                           border-2 border-yellow-400 w-full sm:w-auto min-w-[200px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  SHOP NOW
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Link>
            
            <Link
              to="/explore"
              className="group relative px-8 py-5 text-white font-black text-lg overflow-hidden
                         border-2 border-white/20 hover:border-white/40 backdrop-blur-sm
                         transition-all duration-300 hover:bg-white/10 w-full sm:w-auto
                         flex items-center justify-center gap-3 min-w-[200px]"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">
                EXPLORE
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-300 group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div> */}

      {/* Stats/Social Proof */}

      {/* </div>
      </div> */}
      {/* Add these animations to your global CSS */}
    </section>
  );
};

{
  /* <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-16 animate-fade-in-up animation-delay-800">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-yellow-400">10K+</div>
              <div className="text-xs sm:text-sm text-gray-400 tracking-wider">HAPPY CUSTOMERS</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-yellow-400">500+</div>
              <div className="text-xs sm:text-sm text-gray-400 tracking-wider">UNIQUE DESIGNS</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-yellow-400">4.9 ★</div>
              <div className="text-xs sm:text-sm text-gray-400 tracking-wider">CUSTOMER RATING</div>
            </div>
          </div> */
}
