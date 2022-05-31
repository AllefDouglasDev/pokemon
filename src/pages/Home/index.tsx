import { useState } from "react";
import ReactPaginate from "react-paginate";

import { PokemonCard } from "../../components/PokemonCard";
import Menubar from "../../components/Menubar";
import { useListPokemons } from "../../hooks/useListPokemons";
import Logo from "../../assets/svgs/Logo";

import * as S from "./styles";

export default function Home() {
  const [page, setPage] = useState(0);

  const { pokemons, pageCount } = useListPokemons(page);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  return (
    <S.Container>
      <Menubar />

      <S.Title>
        Qual pokémon você
        <br /> escolheria?
      </S.Title>

      <S.PokemonList>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </S.PokemonList>

      <S.PaginationWrapper>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageChange}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
        />
      </S.PaginationWrapper>

      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
    </S.Container>
  );
}
