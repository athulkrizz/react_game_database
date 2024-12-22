import Genres from "./Genres";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Games {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
    description_raw: string;
    genres: Genres[];
    publishers: Publisher[];
}
