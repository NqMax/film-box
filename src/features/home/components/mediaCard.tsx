import Image from "next/image";
import Link from "next/link";
import { MediaDropdownMenu } from "./mediaDropdownMenu";
import type { Media } from "@/features/types";

export function MediaCard({ media }: { media: Media }) {
  return (
    <div className="flex h-[225px] w-[150px] flex-col gap-y-7">
      <Link href="/" className="relative h-[225px] w-[150px]">
        <Image
          src={`https://media.themoviedb.org/t/p/w185${media.poster_path}`}
          width={150}
          height={225}
          alt="Cover image"
          className="rounded-md"
        />
        <MediaDropdownMenu />
        <div className="bg-primary absolute -bottom-[18px] left-2 flex h-9 w-9 items-center justify-center rounded-full text-white">
          <span className="font-bold">{(media.vote_average * 10).toFixed(0)}</span>
          <span className="text-[6px]">%</span>
        </div>
      </Link>
      <div className="pl-2">
        <div className="font-bold leading-4">{media.title || media.name}</div>
        <div className="text-muted-foreground">{media.release_date || media.first_air_date}</div>
      </div>
    </div>
  );
}
