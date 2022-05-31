export type SpecialDetailsDto = {
  color: {
    name: string;
  };
  gender_rate: number;
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
  }[];
};

export type GenderDto = {
  id: number;
  name: "female" | "male" | "genderless";
  pokemon_species_details: {
    pokemon_species: {
      name: string;
    };
    rate: number;
  }[];
};

export type PokemonDto = {
  id: number;
  name: string;
  weight: number;
  height: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  specieDetails: SpecialDetailsDto;
  sprites: {
    other: { dream_world: { front_default: string } };
  };
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  malePercentage?: number;
  femalePercentage?: number;
};

export type ListPokemonsRequest = {
  limit: number;
  offset: number;
};

export type ListPokemonsResponse = {
  count: number;
  results: PokemonDto[];
};
