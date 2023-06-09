import { useCourseContext } from "../../../context/useCourseContext";
import styled from "styled-components";
import { InputTag } from "./InputTag";
import NextIncon from "../../../assets/nexticon.png";
import { useState } from "react";
import { Intro } from "./Intro";
import { PopHint } from "../../widgets/PopHint";
import PopImg from "../../../assets/input-pop.png";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";

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
  const { slide, nextSlide, updatePromptData } = useCourseContext();
  const [inputvalue, setInputvalue] = useState<any>("");
  const [api,contextHolder] = notification.useNotification({
    placement: "top",
    top: 100,
  });

  
  function handleNext() {
    if (inputvalue.length < 1) {
      // PopHint({ placement: "top", duration: 3, top: 100 });
      api.open({
        message: null,
        duration: 4,
        description: <img src={PopImg} alt="popimg" width={200} />,
        placement: "top",
      });
      return;
    }
    // updatePromptData(inputvalue, tag);
    nextSlide(slidenum);
  }

  return (
    <Container style={{ display: slide === slidenum ? "flex" : "none" }}>
      {contextHolder}
      <div className="left-form">
        <h1>{title}</h1>
        <InputTag
          tag={tag}
          caption={caption}
          eg={eg}
          setInputvalue={setInputvalue}
        />
        {intro ? <Intro intro={intro} /> : null}

        <div className="cover-button">
          <button onClick={handleNext}>
            继续
            <img src={NextIncon} alt="nexticon" height={18} />
          </button>
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
  background-color: white;
  display: flex;
  flex-direction: row;

  .cover-button {
    margin-top: auto;
    margin-bottom: 20px;
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
