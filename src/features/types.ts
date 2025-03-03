export type TimeWindow = "day" | "week";

export interface Media {
  backdrop_path: string | null;
  id: number;
  title: string;
  name: string;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  first_air_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export interface MediaListResponse {
  page: number;
  results: Media[];
  total_results: number;
  total_pages: number;
}

export type MediaSection = {
  title: string;
  tabs: {
    title: string;
    value: string;
    dataFunction: () => Promise<MediaListResponse>;
  }[];
};
