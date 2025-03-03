import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Star, List, Heart, Bookmark } from "lucide-react";
import { MenuIcon } from "@/features/home/assets/menuIcon";

const menuItems = [
  { title: "Add to list", icon: List },
  { title: "Favorite", icon: Heart },
  { title: "Watchlist", icon: Bookmark },
  { title: "Your rating", icon: Star },
];

export function MediaDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute top-2 right-2 focus:outline-none">
        <MenuIcon className="hover:fill-secondary size-6 fill-white/50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        {menuItems.map((item) => (
          <DropdownMenuItem
            key={item.title}
            className="group hover:bg-primary! rounded-none py-2 not-last:border-b hover:text-white!"
          >
            <item.icon className="group-hover:stroke-secondary group-hover:fill-secondary ml-4 fill-black stroke-black" />
            <div className="pt-[1.5px] font-medium">{item.title}</div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
