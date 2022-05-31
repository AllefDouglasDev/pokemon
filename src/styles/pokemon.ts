import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.color};
  color: white;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: ;
  width: 100%;
`;

export const Menubar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
`;

export const Habilitates = styled.div`
  display: flex;
  width: 100%;
`;

