import { useCourseContext } from "../../context/useCourseContext";
import { NextButton } from "./compinents/NextButton";
import { InputTag } from "./compinents/InputTag";
import styled from "styled-components";
import BG from "../../assets/bg.png";

const pagedata = {
  title: "现在开始设计您的课程吧！",
  input: {
    tag:"grade",
    caption: "您所教授的年级：",
    eg: "例如：小学三年级",
  },
  intro: null,
};

export function StartForm() {
  const { changeInfo } = useCourseContext();
  return (
    <Container>
      <div className="left-form">
        <h1>{pagedata.title}</h1>
        <InputTag tag={pagedata.input.tag} caption={pagedata.input.caption} eg={pagedata.input.eg} />
        <NextButton />
      </div>

        <img className = "right-img" src={BG} alt="bg" />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  h1 {
    
  }

  .left-form {
    padding: 2rem;
    height: 100vh;
    width: 100vw;
  }

  .right-img {
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    right: 0;
  }
`;
