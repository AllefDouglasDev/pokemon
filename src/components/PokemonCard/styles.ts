import styled from 'styled-components'

export const Container = styled.div`
  max-width: 200px;
  display: flex;
  flex: 1 1 50px;
  justify-content: space-between;
  background-color: ${props => props.color};

  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  :hover {
    opacity: 0.5;
  }
`
export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: white;
  padding: 10px;
  max-width: 50%;
`

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 5px;
  color: white;
  max-width: 50%;
  img {
    max-width: 90%;
  }
  span {
    opacity: 0.4;
    color: black;
  }
`

export const Habilitates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  opacity: 0.4;
  border-radius: 10px;
  border: 1px solid;
  margin-top: 5px;
  height: 25px;

  span {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: 5px;
    margin-right: 5px;
    color: black;
    font-size: 0.8rem;
  }
`
