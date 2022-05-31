import api from "..";
import { ListPokemonsRequest, ListPokemonsResponse } from "./types";

const endpoints = {
  listPokemons: () => "/pokemon",
};

const pokemonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    listPokemons: builder.query<ListPokemonsResponse, ListPokemonsRequest>({
      query: (params) => ({
        url: endpoints.listPokemons(),
        params,
      }),
    }),
    fetchPokemonDetails: builder.query({
      query: (url) => ({ url }),
    }),
    fetchPokemonSpecieDetails: builder.query({
      query: (url) => ({ url }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useListPokemonsQuery,
  useFetchPokemonDetailsQuery,
  useLazyFetchPokemonDetailsQuery,
  useFetchPokemonSpecieDetailsQuery,
  useLazyFetchPokemonSpecieDetailsQuery,
} = pokemonApi;

export default pokemonApi;
