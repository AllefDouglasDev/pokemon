import styled, { css } from "styled-components";
import { tint, transparentize } from "polished";

type WrapperProps = {
  color: string;
};

function readableColor(color: string) {
  const lightColors = ["white", "yellow"];
  return lightColors.includes(color) ? "black" : "white";
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color }) => css`
    position: relative;

    width: 16.5rem;
    height: 12.5rem;
    background-color: ${tint(0.2, color)};
    border-radius: ${theme.border.radius.medium};

    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    box-shadow: 0px 8px 15px rgba(48, 57, 67, 0.12);
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PokemonId = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    opacity: 0.3;
  `}
`;

export const Name = styled.span<{ color: string }>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${readableColor(color)};
    text-transform: capitalize;
    display: inline-block;
    padding-bottom: ${theme.spacings.xsmall};
  `}
`;

export const AbilityWrapper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  `}
`;

export const Ability = styled.li<{ color: string }>`
  ${({ theme, color }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background-color: ${transparentize(0.8, theme.colors.white)};
    width: fit-content;
    border-radius: ${theme.border.radius.medium};
    min-width: 4.5rem;
    text-align: center;

    span {
      color: ${readableColor(color)};
      font-size: ${theme.font.sizes.xlittle};
      text-transform: capitalize;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: 9rem;
    height: 7rem;
    object-fit: contain;

    right: 0;
    bottom: ${theme.spacings.xsmall};
  `}
`;
