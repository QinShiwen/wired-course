//import { useCourseContext } from "../../context/useCourseContext";
import { NextButton } from "./compinents/NextButton";
import { InputTag } from "./compinents/InputTag";
import styled from "styled-components";
import BG from "../../assets/bg.png";
import { StartPage } from "./compinents/StartPage";

export const pagesdata = [
  {
    title: "现在开始设计您的课程吧！",
    input: {
      tag: "grade",
      caption: "您所教授的年级：",
      eg: "例如：小学三年级",
    },
    intro: null,
    img: BG,
  },
  {
    title: null,
    input: {
      tag: "concept",
      caption: "请输入您项目式课程的大概念：",
      eg: "例如：城市规划",
    },
    intro: {
      name: "什么是“大概念”（big idea）？",
      content: [
        "学生要掌握某个学科领域的知识和能力，不仅需要扎实的知识基础，还需要构建一个概念框架来促进有意义的学习。大概念是学习的核心，是一个统领全局的概念，能将知识整合成有意义的集合体，为我们提供认识的框架，使信息有条理地归纳与整理。大概念在学习中起到概念性联结的作用，为学生建构了组织并理解知识和经验的框架，帮助学生将各种分散的知识点和技能联系起来，形成更高层次的认知结构。",
        "例1：“自然循环”：这个大概念涉及到生态系统中的能量和物质如何被循环利用。在这个项目中，学生可以研究植物、动物和微生物如何相互作用，以及它们如何通过食物链和生物地球化学循环相互联系。",
        "例2：“城市规划”：这个大概念涉及到如何设计和管理一个城市，以满足居民的需求和利益。在这个项目中，学生可以学习城市规划原则、人口统计数据、交通规划和社区参与等相关知识，然后将这些知识应用到他们自己的城市规划方案中。",
      ],
    },
    img: BG,
  },
  {
    title: null,
    input: {
      tag: "grade",
      caption: "您所教授的年级：",
      eg: "例如：",
    },
    intro: {
      name: "什么是“驱动性问题”（Driven Question）？",
      content: [
        "在PBL教学法中，驱动性问题应该是开放式的、具有挑战性的，并且与现实世界相关。",
      ],
    },
    img: BG,
  },
];

const pagedata = {
  title: "现在开始设计您的课程吧！",
  input: {
    tag: "grade",
    caption: "您所教授的年级：",
    eg: "例如：小学三年级",
  },
  intro: null,
};

export function StartForm() {
  //const { changeInfo } = useCourseContext();
  return (
    <Container>
      {pagesdata.map((pagedata, index) => {
        return (
          <StartPage
            key={index}
            slidenum={index}
            title={pagedata.title}
            input={pagedata.input}
            intro={pagedata.intro}
            img={pagedata.img}
          />
        );
      })}
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
    padding-top: 5rem;
    padding-left: 5rem;

    height: 100vh;
    width: 100vw;
  }

  .right-img {
    height: 100vh;
    margin-left: auto;
    margin-right: 0;
  }
`;
