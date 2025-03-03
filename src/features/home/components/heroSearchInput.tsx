"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// Hooks
import { useRouter } from "next/navigation";

export function HeroSearchInput() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);

    const query = formData.get("query");

    router.push(`/search?query=${query}`);
  }

  return (
    <form onSubmit={handleSubmit} className="relative [--ring:var(--color-secondary)]">
      <Input
        type="text"
        name="query"
        placeholder="Search for movie, tv show, person..."
        className="h-12 rounded-full bg-white"
      />
      <Button className="from-tertiary to-secondary absolute top-0 right-0 h-12 rounded-full bg-linear-to-r px-6 py-1">
        Search
      </Button>
    </form>
  );
}
