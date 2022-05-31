export type ListPokemonsRequest = {
  limit: number;
  offset: number;
};

export type ListPokemonsResponse = {
  count: number;
  results: any[];
};
