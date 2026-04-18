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

// <div className="flex flex-wrap items-center gap-4">
          // <button
          //   className="group relative px-10 py-4 bg-white text-black text-sm
          //              font-black tracking-widest uppercase overflow-hidden 
          //              transition-all duration-300 hover:bg-transparent 
          //              hover:text-white rounded-xl"
          //   style={{
          //     fontFamily: "'Arial Black', sans-serif",
          //     border: "1.5px solid white",
          //   }}
          // >
          //   Shop Now
          // </button>
          // <button
          //   className="px-10 py-4 text-white/70 text-sm tracking-widest 
          //              uppercase hover:text-white transition-colors duration-300"
          //   style={{
          //     fontFamily: "'Arial Black'",
          //     borderBottom: "1px solid rgba(255,255,255,0.3)",
          //   }}
          // >
          //   Explore →
          // </button>
          // </div>



      //     {/* 
      // {/* Advanced Gradient Scrim (smoother than standard gradients) */}
      // {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      // <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" /> */}

      // <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 md:px-12">
      //   {/* BIG TEXT BLOCK */}
      //   <div className="flex flex-col mb-6">
      //     <h1 className="text-white italic text-lg leading-[0.8] tracking-[-0.06em] opacity-90">
      //       Wear What
      //     </h1>

      //     {/* Negative top margin pulls the second line up to "nestle" into the first line */}
      //     <p className="font-head font-black text-white text-lg md:text-xl leading-[0.8] tracking-[-0.08em] -mt-2 md:-mt-6">
      //       <span className="font-brand text-white inline-block hover:text-gray-400 transition-colors">
      //         T
      //       </span>
      //       URNS{" "}
      //       <span className="font-brand text-white inline-block hover:text-gray-400 transition-colors">
      //         H
      //       </span>
      //       EADS
      //     </p>
      //   </div>

      //   {/* SUBTEXT with better alignment */}
      //   <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
      //     <div className="h-[1px] w-12 bg-white/30 hidden md:block" />
      //     <p className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium">
      //       Re Tlo Popa Kaofela &nbsp;•&nbsp; Est. 2025
      //     </p>
      //   </div>

      //   {/* CTAs with modern "Streetwear" styling */}
       
      // </div> */}