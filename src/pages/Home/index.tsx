import { useState } from "react";
import ReactPaginate from "react-paginate";

import { PokemonCard } from "../../components/PokemonCard";
import Menubar from "../../components/Menubar";
import { useListPokemons } from "../../hooks/useListPokemons";

import * as S from "./styles";

export default function Home() {
  const [page, setPage] = useState(1);

  const { pokemons, isLoading, pageCount } = useListPokemons(page);

  const handlePageChange = (data: any) => {
    const newPage = data.selected || 1;
    setPage(newPage);
  };

  return (
    <S.Container>
      <Menubar />
      {isLoading && (
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Loading...
        </span>
      )}

      <S.Grid>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </S.Grid>

      <S.PaginationWrapper>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageChange}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
        />
      </S.PaginationWrapper>
    </S.Container>
  );
}
//<Pagination
//count={totalPages}
//variant="outlined"
//page={page}
//onChange={(e, val) => {
//console.log(page);
//setPage(val - 1)
//}}
///>
//<img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" />