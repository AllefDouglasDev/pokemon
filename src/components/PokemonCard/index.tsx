import * as S from "./styles";

export type PokemonCardProps = {
  pokemon: {
    id: number;
    name: string;
    abilities: {
      ability: {
        name: string;
        url: string;
      };
    }[];
    specieDetails: {
      color: {
        name: string;
      };
    };
    sprites: {
      other: { dream_world: { front_default: string } };
    };
  };
};

function pad(id: string | number | undefined, length: number) {
  let str = id ?? "";
  while (String(str).length < length) {
    str = "0" + str;
  }
  return str;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const color = pokemon.specieDetails.color.name;
  return (
    <S.Wrapper color={color}>
      <S.Header>
        <S.PokemonId>#{pad(pokemon.id, 3)}</S.PokemonId>
      </S.Header>

      <S.Name color={color}>{pokemon.name}</S.Name>
      <S.AbilityWrapper>
        {pokemon.abilities.slice(0, 2).map(({ ability }) => (
          <S.Ability key={ability.url} color={color}>
            <span>{ability.name}</span>
          </S.Ability>
        ))}
      </S.AbilityWrapper>

      <S.Image src={pokemon.sprites.other.dream_world.front_default} />
    </S.Wrapper>
  );
}
