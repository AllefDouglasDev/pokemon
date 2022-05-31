import api from "..";
import {
  GenderDto,
  ListPokemonsRequest,
  ListPokemonsResponse,
  PokemonDto,
  SpecialDetailsDto,
} from "./types";

const endpoints = {
  listPokemons: () => "/pokemon",
  fetchPokemonById: (id: number) => `/pokemon/${id}`,
  fetchPokemonSpecieDetailsById: (id: number) => `/pokemon-species/${id}`,
  fetchGender: (rate: number | string) => `/gender/${rate}`,
};

const pokemonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    listPokemons: builder.query<ListPokemonsResponse, ListPokemonsRequest>({
      query: (params) => ({
        url: endpoints.listPokemons(),
        params,
      }),
    }),
    fetchPokemonDetailsById: builder.query<PokemonDto, number>({
      query: (id) => ({ url: endpoints.fetchPokemonById(id) }),
    }),
    fetchPokemonDetailsByURL: builder.query<PokemonDto, string>({
      query: (url) => ({ url }),
    }),
    fetchPokemonSpecieDetailsById: builder.query<SpecialDetailsDto, number>({
      query: (id) => ({ url: endpoints.fetchPokemonSpecieDetailsById(id) }),
    }),
    fetchPokemonSpecieDetailsByURL: builder.query<SpecialDetailsDto, string>({
      query: (url) => ({ url }),
    }),
    fetchGender: builder.query<GenderDto, number>({
      query: (id) => ({ url: endpoints.fetchGender(id) }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useListPokemonsQuery,
  useFetchPokemonDetailsByIdQuery,
  useFetchPokemonDetailsByURLQuery,
  useLazyFetchPokemonDetailsByURLQuery,
  useFetchPokemonSpecieDetailsByURLQuery,
  useLazyFetchPokemonSpecieDetailsByURLQuery,
  useFetchPokemonSpecieDetailsByIdQuery,
  useLazyFetchPokemonSpecieDetailsByIdQuery,
  useLazyFetchGenderQuery,
} = pokemonApi;

export default pokemonApi;
