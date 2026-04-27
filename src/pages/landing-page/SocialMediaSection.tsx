import { SocialLinksArray } from "@/lib/socialLinks";

export const SocialMediaSection: React.FC = () => {
  return (
    <section className="mt-grow">
      <h1 className="text-center mt-40">Follow us</h1>
      <div className="flex flex-wrap justify-center items-center 
                      gap-4 max-w-3xl mx-auto my-10 px-5">
        {SocialLinksArray.map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
            className="group flex items-center gap-2 p-3 rounded-xl
                       border border-transparent
                       hover:border-accent hover:bg-accent/5
                       transition-all duration-300"
          >
            <span className="shrink-0 text-main group-hover:text-accent 
                             transition-colors duration-300 [&>svg]:stroke-none">
              <link.icon size={28} />
            </span>

            <span
              className="overflow-hidden whitespace-nowrap font-medium text-sm
                         w-0 group-hover:w-md
                         opacity-0 group-hover:opacity-100
                         transition-[width,opacity] duration-500 ease-in-out"
            >
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};