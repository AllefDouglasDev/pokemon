import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.black100};
    padding: ${theme.spacings.xlarge} ${theme.spacings.medium};
  `}
`;

export const PaginationWrapper = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }

  .selected {
    background-color: red;
    padding: 0.5rem;
    color: white;
  }
`;
