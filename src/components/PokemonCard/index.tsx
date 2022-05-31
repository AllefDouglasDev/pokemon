import { PokemonDto } from "../../api/pokemons/types";
import * as S from "./styles";

export type PokemonCardProps = {
  pokemon: PokemonDto;
};

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const color = pokemon.specieDetails.color.name;

  return (
    <S.Wrapper to={`/pokemon/${pokemon.id}`} color={color}>
      <S.Header>
        <S.PokemonId>#{pokemon?.id?.toString().padStart(3, "0")}</S.PokemonId>
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
