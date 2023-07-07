import styled from "styled-components";
import { Space } from "antd";

import introIcon1 from "../../assets/landpage/intro1.png";
import introIcon2 from "../../assets/landpage/intro2.png";
import platfromIcon from "../../assets/landpage/platform_screen.png";

//nav bar
import Logo from "../../assets/logo.png";
const LandRoutes = [
  {
    name: "关于PBL",
  },
  {
    name: "产品",
  },
  {
    name: "案例分享",
  },
  {
    name: "关于我们",
  },
];

export function LandPage() {
  return (
    <Container>
      <NavBar>
        <Space>
          <img src={Logo} alt="logo" height={30} />
          {LandRoutes.map((LandRoute) => {
            return <span>{LandRoute.name}</span>;
          })}
        </Space>
        <span>登陆/注册</span>
      </NavBar>
      <HomeSection>
        <h1>精研项目化学习设计，赋能教育，</h1>
        <h1>引领教师卓越之路。</h1>
        <h3>通过AI点亮创意，为您打造定制PBL课程大纲和内容</h3>
        <button>开始免费试用</button>
      </HomeSection>
      <Introduction>
        <div className="intro">
          <h1>什么是PBL项目化学习？</h1>
          <div className="intro-1-text">
            <img src={introIcon1} alt="intro1" />
            <p>
              “学生在一段时间内通过研究并应对一个真实的、有吸引力的和复杂的问题、课题或挑战，从而掌握重点知识和技能。项目化学习的重点是学生的学习目标，包括基于标准的内容以及如批判性思维、问题解决、合作和自我管理等技能。”—巴克教育研究所(Buck
              Institute for
              Education)。在项目化学习的研究中，基本强调这些要素：真实的驱动性问题；在情境中对问题展开探究；用项目化小组的方式进行学习；运用各种工具和资源促进问题解决；最终可以产生可以公开发表的结果。维思智课引入AI生成技术，助力教师科学设计项目化学习。
            </p>
          </div>
        </div>
        <div className="intro">
          <h1>AI辅助，轻松几步，备课教研两不误</h1>
          <div className="intro-2-text">
            <img src = {platfromIcon} alt="platform"/>
            <img src={introIcon2} alt="intro2" />
          </div>
        </div>
      </Introduction>
    </Container>
  );
}

const Container = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
`;

const NavBar = styled.div`
  height: 5rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    margin-right: 2rem;
  }
`;

const HomeSection = styled.div`
    width: 100vw;
    padding: 3rem 0 0 5rem;

    h1 {
        font-size: 3rem;
        font-family: "Poppins";
    }

    h1:nth-child(2){
        color:#FCC733;
    }

    button{
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 10rem;
        height: 3rem;
        border-radius: 1.5rem;
        outline: none;
        border: none;
        background: #6396F6;
        color: #FFFFFF;
        box-shadow: 0px 4px 6px 0px #00000040;
        cursor: pointer;
    }
}`;

const Introduction = styled.div`
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
