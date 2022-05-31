import { useCallback, useEffect, useState } from "react";
import {
  useFetchPokemonDetailsByIdQuery,
  useLazyFetchPokemonSpecieDetailsByIdQuery,
} from "../api/pokemons";
import { PokemonDto } from "../api/pokemons/types";

export function useFetchPokemon(id: number) {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDto | null>(null);

  const { data, isFetching, isLoading } = useFetchPokemonDetailsByIdQuery(id);

  const [fetchSpecieDetails] = useLazyFetchPokemonSpecieDetailsByIdQuery();

  const loadPokemonInfo = useCallback(async () => {
    try {
      if (data) {
        setLoading(true);
        const specieDetails = await fetchSpecieDetails(data.id).unwrap();

        const femalePercentage = (specieDetails.gender_rate * 100) / 8;
        const malePercentage = 100 - femalePercentage;

        setPokemon({
          ...data,
          specieDetails,
          malePercentage,
          femalePercentage,
        });
        setLoading(false);
      }
    } catch (error) {
      if (data) {
        setPokemon(data);
      }
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      loadPokemonInfo();
    }
  }, [data]);

  return { pokemon, isLoading: loading || isLoading || isFetching };
}
