import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://pokeapi.co/api/v2";

const api = createApi({
  tagTypes: ["Pokemons"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
});

export default api;
