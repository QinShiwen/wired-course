import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const homedata = {
  title1: "精研项目化学习设计，赋能教育，",
  title2: "引领教师卓越之路。",
  breif: "通过AI点亮创意，为您打造定制PBL课程大纲和内容",
};

export function HomeSection() {
  const navigate = useNavigate();

  function handleStart() {
    //需要判断是否登入
    navigate("/start-form");
  }

  return (
    <Container>
      <h1>{homedata.title1}</h1>
      <h1>{homedata.title2}</h1>
      <h3>{homedata.breif}</h3>
      <button onClick={handleStart}>开始免费试用</button>
    </Container>
  );
}

const Container = styled.div`
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
