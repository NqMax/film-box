import type { MediaListResponse, TimeWindow } from "./types";

async function tmdbFetch(url: string | URL | globalThis.Request) {
  try {
    const fetchOptions: RequestInit = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      // force-cache is used to memoize the request
      // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#reusing-data-across-multiple-functions
      cache: "force-cache",
    };

    const baseUrl = "https://api.themoviedb.org/3";

    const response = await fetch(`${baseUrl}${url}`, fetchOptions);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    // TODO: Logic
  }
}

class TMDB {
  trending = {
    baseUrl: "/trending",
    all(timeWindow: TimeWindow = "day"): Promise<MediaListResponse> {
      const url = `${this.baseUrl}/all/${timeWindow}?language=en-US`;
      return tmdbFetch(url);
    },
  };
}

export const tmdb = new TMDB();
