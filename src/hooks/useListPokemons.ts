import { useCallback, useEffect, useState } from "react";
import {
  useLazyFetchPokemonDetailsByURLQuery,
  useLazyFetchPokemonSpecieDetailsByURLQuery,
  useListPokemonsQuery,
} from "../api/pokemons";

export const PER_PAGE = 10;

export function useListPokemons(page: number) {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([]);

  const offset = page * PER_PAGE;
  const {
    data,
    isLoading: isPokemonsLoading,
    isFetching,
  } = useListPokemonsQuery({
    limit: PER_PAGE,
    offset,
  });
  const [fetchDetails] = useLazyFetchPokemonDetailsByURLQuery();
  const [fetchSpecieDetails] = useLazyFetchPokemonSpecieDetailsByURLQuery();

  const loadPokemonDetails = useCallback(async (data: any[]) => {
    setLoading(true);
    const allPokemons = await Promise.all(
      data.map(async (pokemon) => {
        const details = await fetchDetails(pokemon.url).unwrap();
        const specieDetails = await fetchSpecieDetails(
          details.species.url
        ).unwrap();
        return { ...details, specieDetails };
      })
    );
    setPokemons(allPokemons);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (data?.results) {
      loadPokemonDetails(data.results);
    }
  }, [data, loadPokemonDetails]);

  return {
    pokemons,
    pageCount: Math.ceil((data?.count || 0) / PER_PAGE),
    setPokemons,
    isLoading: loading || isPokemonsLoading || isFetching,
  };
}
