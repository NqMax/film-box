import { Hero } from "@/features/home/components/hero";
import { MediaSection } from "@/features/home/components/mediaSection";
// Utils
import { tmdb } from "@/features/utils";

const mediaSections = [
  {
    title: "Trending",
    tabs: [
      {
        title: "Today",
        value: "today",
        dataFunction: () => tmdb.trending.all("day"),
      },
      {
        title: "This week",
        value: "week",
        dataFunction: () => tmdb.trending.all("week"),
      },
    ],
  },
];

export default async function Home() {
  return (
    <>
      <Hero />
      {mediaSections.map((section) => (
        <MediaSection key={section.title} section={section} />
      ))}
    </>
  );
}
