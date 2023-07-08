import styled from "styled-components";
import introIcon1 from "../../../assets/landpage/intro1.png";
import introIcon2 from "../../../assets/landpage/intro2.png";
import platfromIcon from "../../../assets/landpage/platform_screen.png";

const introdata = {
  part1: {
    title: "什么是PBL项目化学习？",
    text: "“学生在一段时间内通过研究并应对一个真实的、有吸引力的和复杂的问题、课题或挑战，从而掌握重点知识和技能。项目化学习的重点是学生的学习目标，包括基于标准的内容以及如批判性思维、问题解决、合作和自我管理等技能。”—巴克教育研究所(BuckInstitute for Education)。在项目化学习的研究中，基本强调这些要素：真实的驱动性问题；在情境中对问题展开探究；用项目化小组的方式进行学习；运用各种工具和资源促进问题解决；最终可以产生可以公开发表的结果。维思智课引入AI生成技术，助力教师科学设计项目化学习。",
    icon1: introIcon1,
  },
  part2: {
    title: "AI辅助，轻松几步，备课教研两不误",
  },
};

export function Introduction() {
  return (
    <Container>
      <div className="intro">
        <h1>{introdata.part1.title}</h1>
        <div className="intro-1-text">
          <img src={introIcon1} alt="intro1" />
          <p>{introdata.part1.text}</p>
        </div>
      </div>
      <div className="intro">
        <h1>{introdata.part2.title}</h1>
        <div className="intro-2-text">
          <img src={platfromIcon} alt="platform" />
          <img src={introIcon2} alt="intro2" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  .intro {
    padding: 5rem 8rem;
    h1 {
      font-size: 3rem;
    }
  }

  .intro-1-text {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 22rem;
      margin: 5rem;
    }

    p {
      wrap: no-wrap;
      padding: 0 5rem;
      font-size: 1.2rem;
      line-height: 2.5rem;
    }
  }

  .intro-2-text {
    margin-top: 3rem;
    position: relative;
    img:nth-child(1) {
      position: absolute;
      width: 60rem;
    }
    img:nth-child(2) {
      top: 10rem;
      position: absolute;
      width: 35rem;
      right: 0;
    }
  }
`;
