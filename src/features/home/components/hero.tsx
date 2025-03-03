import { HeroSearchInput } from "@/features/home/components/heroSearchInput";
import { CSSProperties } from "react";

export function Hero() {
  const homeBannerPath = { "--home-banner": 'url("/home-banner.jpg")' } as CSSProperties;

  return (
    <section
      style={homeBannerPath}
      className="h-90 bg-[image:var(--home-banner)]"
    >
      <div className="container flex h-full flex-col justify-center gap-y-10">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-white">Welcome.</h1>
          <p className="text-3xl font-medium text-white">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <HeroSearchInput />
      </div>
    </section>
  );
}
