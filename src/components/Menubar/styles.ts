import styled, { css } from "styled-components";

import ProfileBackground from "../../assets/svgs/ProfileBackground";

export const Container = styled.header`
  ${({ theme }) => css`
    height: ${theme.sizes.header};
    background-color: ${theme.colors.primary};
    border-radius: 0 0 ${theme.border.radius.large} ${theme.border.radius.large};
    padding: 0 ${theme.spacings.medium};

    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: hidden;
  `}
`;

export const Main = styled.div``;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
  `}
`;

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
  `}
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding-right: ${theme.spacings.xsmall};
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const ProfileBackgroundImage = styled(ProfileBackground)`
  ${({ theme }) => css`
    position: absolute;
    top: -${theme.spacings.medium};
    right: -${theme.spacings.medium};
  `}
`;

export const ProfileImage = styled.img`
  ${({ theme }) => css`
    width: ${theme.sizes.profileImage};
    height: ${theme.sizes.profileImage};
    object-fit: cover;
    border: 0.1rem solid ${theme.colors.white};
    border-radius: ${theme.border.radius.small};
  `}
`;
