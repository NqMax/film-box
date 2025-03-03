import { MediaCard } from "@/features/home/components/mediaCard";
import type { MediaListResponse } from "@/features/types";

export async function MediaTabContent({
  dataFunction,
}: {
  dataFunction: () => Promise<MediaListResponse>;
}) {
  const data = await dataFunction();

  return (
    <>
      {data.results.map((media) => (
        <MediaCard key={media.id} media={media} />
      ))}
    </>
  );
}
