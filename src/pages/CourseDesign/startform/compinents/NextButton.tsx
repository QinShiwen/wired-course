import NextIncon from "../../../assets/nexticon.png";
import styled from "styled-components";

export function NextButton() {
  return (
    <Container>
      <button>
        继续
        <img src={NextIncon} alt="nexticon" height={18}/>
      </button>
    </Container>
  );
}

const Container = styled.div`
  button {
    cursor: pointer;
    outline: none;
    border: none;
    width: 150px;
    height: 50px;
    background: #6396f7;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Songti SC";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #fcfcfc;

    img{
      margin-left: 10px;
    }
  }
`;
