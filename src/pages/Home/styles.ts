import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 70%;
  padding: 20px;
  h1 {
    font-size: 1.5rem;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  img {
    padding: 10px;
    width: 50%;
  }
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
