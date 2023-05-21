import { useCourseContext } from "../../../context/useCourseContext";
import styled from "styled-components";
import { NextButton } from "./NextButton";
import { InputTag } from "./InputTag";
import NextIncon from "../../../assets/nexticon.png";
interface StartPageProps {
  slidenum: number;
  title: any;
  input: {
    tag: string;
    caption: string;
    eg: string;
  };
  intro: any;
  img: any;
}

export function StartPage({
  slidenum,
  title,
  input,
  intro,
  img,
}: StartPageProps) {
  const { tag, caption, eg } = input;
  const { slide, nextSlide } = useCourseContext();
  return (
    <Container style={{ display: slide === slidenum ? "flex" : "none" }}>
      <div className="left-form">
        <h1>{title}</h1>
        <InputTag tag={tag} caption={caption} eg={eg} />
        <div onClick = {()=>nextSlide(slidenum)}><NextButton  /></div>
      </div>
      <img className="right-img" src={img} alt="bg" />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;

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

    img {
      margin-left: 10px;
    }
  }
`;
