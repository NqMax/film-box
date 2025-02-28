import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const items = [
  {
    title: "Movies",
    children: [
      { title: "Popular", href: "/movies/popular" },
      { title: "Now Playing", href: "/movies/now-playing" },
      { title: "Upcoming", href: "/movies/upcoming" },
      { title: "Top Rated", href: "/movies/top-rated" },
    ],
  },
  {
    title: "TV Shows",
    children: [
      { title: "Popular", href: "/tv/popular" },
      { title: "Airing Today", href: "/tv/airing-today" },
      { title: "On TV", href: "/tv/on-tv" },
      { title: "Top Rated", href: "/tv/top-rated" },
    ],
  },
  {
    title: "People",
    children: [
      { title: "Popular People", href: "/people/popular" },
      { title: "Trending People", href: "/people/trending" },
    ],
  },
  {
    title: "More",
    children: [{ title: "Leaderboard", href: "/leaderboard" }],
  },
];

export function HeaderNavMenu() {
  return (
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger className="bg-primary hover:bg-accent/10 data-[state=open]:bg-accent/10 data-[active=true]:bg-accent/10 focus:bg-primary font-bold text-white!">
              {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-36! px-0 py-2">
              {item.children.map((child) => (
                <Link
                  key={child.title}
                  href={child.href}
                  className="hover:bg-accent block px-4 py-1 text-sm"
                >
                  {child.title}
                </Link>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
