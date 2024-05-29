import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import  { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
};

const useGames = (gameQuery: GameQuery) => useQuery
<FetchResponse<Game>, Error>
({ 
    queryKey: ['games', gameQuery],
    queryFn: () => 
      apiClient.get<FetchResponse<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    })
    
    .then(res => res.data)
  })
  // samepleee 

  

export default useGames;
