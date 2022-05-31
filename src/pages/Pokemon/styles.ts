import { tint, transparentize } from "polished";
import { CgRuler } from "react-icons/cg";
import styled, { css } from "styled-components";
import { readableColor } from "../../utils/color";

type ColorRequired = {
  color: string;
};

export const Wrapper = styled.div`
  height: 100vh;
`;

export const ToolBar = styled.div<ColorRequired>`
  ${({ theme, color }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: ${theme.spacings.medium};
    background-color: ${tint(0.2, color)};
  `}
`;

export const Header = styled.header<ColorRequired>`
  ${({ color }) => css`
    height: 25.6rem;
    background-color: ${tint(0.2, color)};
  `}
`;

type RowProps = {
  justify?: "center" | "space-between" | "flex-start";
  align?: "center" | "space-between" | "flex-start";
};

export const Row = styled.div<RowProps>`
  ${({ theme, justify = "flex-start", align = "center" }) => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    width: 100%;
    padding: 0 ${theme.spacings.medium};
  `}
`;

export const PokemonId = styled.span<ColorRequired>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.sizes.xmedium};
    font-weight: ${theme.font.bold};
    color: ${readableColor(color)};
    opacity: 0.3;
  `}
`;

export const Name = styled.span<ColorRequired>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.semibold};
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
    gap: 0.6rem;
    padding: 0 ${theme.spacings.medium};
    flex-wrap: wrap;
  `}
`;

export const Ability = styled.li<ColorRequired>`
  ${({ theme, color }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background-color: ${transparentize(0.8, theme.colors.white)};
    width: fit-content;
    border-radius: ${theme.border.radius.medium};
    min-width: 4.5rem;
    text-align: center;

    span {
      color: ${readableColor(color)};
      font-size: ${theme.font.sizes.xxsmall};
      text-transform: capitalize;
    }
  `}
`;

export const Content = styled.div<ColorRequired>`
  ${({ theme, color }) => css`
    position: relative;
    width: 100%;
    border-radius: ${theme.border.radius.large} ${theme.border.radius.large} 0 0;
    margin-top: -${theme.border.radius.large};
    background-color: ${color === "white"
      ? theme.colors.gray100
      : theme.colors.white};
    padding: ${theme.spacings.xxlarge} ${theme.spacings.medium};
  `}
`;

export const PokemonImage = styled.img`
  width: 16rem;
  height: 16rem;
  object-fit: contain;
  position: absolute;
  top: -12.5rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const ContentTitle = styled.h1`
  ${({ theme, color }) => css`
    color: ${color === "white" ? theme.colors.black200 : color};
    display: inline-block;
    margin-bottom: ${theme.spacings.xlarge};
  `}
`;

export const Description = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    line-height: 2.4rem;
  `}
`;

export const Metrics = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.xlarge} 0 ${theme.spacings.large};
  `}
`;

export const MetricWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.large} 0;
    gap: ${theme.font.sizes.xlittle};

    :first-of-type {
      border-right: 1px solid ${theme.colors.gray100};
    }

    :last-of-type {
      border-left: 1px solid ${theme.colors.gray100};
      align-items: flex-start;
    }
  `}
`;

export const MetricValue = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black200};
    text-transform: capitalize;
  `}
`;

export const MetricName = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.little};
    color: ${theme.colors.gray};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `}
`;

export const MetricHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const RulerIcon = styled(CgRuler)`
  transform: rotate(-90deg);
`;

export const Heading = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.black};
    display: inline-block;
    margin: ${theme.spacings.small} 0;
  `}
`;

export const CharacteristicWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.3rem;
    align-items: center;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const CharacteristicTitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    min-width: 8.7rem;
  `}
`;

export const CharacteristicValue = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    min-width: 3rem;
  `}
`;

export const CharacteristicBar = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 0.3rem;
    background-color: ${theme.colors.gray200};
    border-radius: 1.1rem;
  `}
`;

export const CharacteristicBarColor = styled.div<{ filled: number }>`
  ${({ theme, filled }) => css`
    width: ${filled}%;
    height: 100%;
    position: absolute;
    border-radius: 1.1rem;
    top: 0;
    left: 0;
    background-color: ${filled > 50 ? theme.colors.green : theme.colors.red};
  `}
`;

export const CharacteristicGender = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const CharacteristicGenderPercentage = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    margin-left: ${theme.spacings.small};

    :first-of-type {
      margin-left: ${theme.spacings.xlarge};
    }

    span {
      display: inline-block;
      margin: 0 ${theme.spacings.xxsmall};
    }
  `}
`;
