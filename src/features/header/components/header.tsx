import Logo from "@/public/tmdb-logo.svg";
import Image from "next/image";
import { HeaderNavMenu } from "@/features/header/components/headerNavMenu";

export function Header() {
  return (
    <header className="bg-primary h-16">
      <div className="container flex h-full items-center gap-x-4">
        <Image src={Logo} alt="FilmBox Logo" width={154} height={20} />
        <HeaderNavMenu />
      </div>
    </header>
  );
}
