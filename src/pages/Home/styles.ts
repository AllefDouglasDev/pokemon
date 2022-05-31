import { lighten } from "polished";
import styled, { css } from "styled-components";
import LogoIcon from "../../assets/svgs/Logo";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const PokemonList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacings.small} ${theme.spacings.xsmall};
    padding: 0 ${theme.spacings.small};
  `}
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
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      margin: ${theme.spacings.medium} 0;
      max-width: ${theme.sizes.pagination};
      padding: ${theme.spacings.small};
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2.7rem;
      height: 2.7rem;
      border: 1px solid ${theme.colors.primary};
      border-radius: 50%;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    .selected {
      padding: 0.5rem;
      background-color: ${lighten(0.4, theme.colors.primary)};
      border-color: ${lighten(0.4, theme.colors.primary)};
      color: white;
    }
  `}
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.medium} 0 ${theme.spacings.xlarge};
  `}
`;
