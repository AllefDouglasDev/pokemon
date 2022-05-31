import * as S from "./styles";

export type PokemonCardProps = {
  pokemon: any;
};

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const pad = (id: string | undefined, length: number) => {
    let str = id ?? "";
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  };

  return (
    <S.Container color={pokemon.specieDetails.color.name}>
      <S.ContentLeft>
        <span>{pokemon.name}</span>
        {pokemon.abilities?.map(({ ability }) => {
          return (
            <S.Habilitates key={ability.url}>
              <span>{ability.name}</span>
            </S.Habilitates>
          );
        })}
      </S.ContentLeft>
      <S.ContentRight>
        <span>#{pad(pokemon.id, 3)}</span>
        <img src={pokemon.sprites.other.dream_world.front_default} />
      </S.ContentRight>
    </S.Container>
  );
}
