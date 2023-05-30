import { useCourseContext } from "../../../context/useCourseContext";
import styled from "styled-components";
import { NextButton } from "./NextButton";
import { InputTag } from "./InputTag";
import NextIncon from "../../../assets/nexticon.png";
import { useState } from "react";

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
  const { slide, nextSlide, changeInfo } = useCourseContext();
  const [inputvalue, setInputvalue] = useState<any>("");

  function handleNext(){
    if(inputvalue.length < 1){
      alert("请输入内容")
      return
    }
    nextSlide(slidenum);
    changeInfo(inputvalue, tag);
  }

  return (
    <Container style={{ display: slide === slidenum ? "flex" : "none" }}>
      <div className="left-form">
        <h1>{title}</h1>
        <InputTag tag={tag} caption={caption} eg={eg} setInputvalue={setInputvalue}/>
        {intro ? (
          <div className="intro">
            <h2>{intro.name}</h2>

            {intro.content.map((item: any, index: number) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        ) : null}

        <div className="cover-button" onClick={handleNext}>
          <NextButton />
        </div>
      </div>
      <img className="right-img" src={img} alt="bg" />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;

  .cover-button {
    margin-top: auto;
    margin-bottom: 20px;
  }

  h2 {
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-color: #6396f7;
  }

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
    margin-left: auto;
    margin-right: 20px;

    img {
      margin-left: 10px;
    }
  }
`;
