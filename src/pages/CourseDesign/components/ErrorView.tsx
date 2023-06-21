import styled from "styled-components";
import FetchFail from "../../../assets/fetchfail.png";
import { useCourseContext } from "../../../context/useCourseContext";
export function ErrorView() {
  const { setCourseStatus, fetchCourse } = useCourseContext();
  return (
    <Container>
      <img src={FetchFail} width={150} alt="img" />
      <h2>课件生成失败</h2>
      <span>
        <button onClick={fetchCourse}>重新加载</button>
        <button
          onClick={() => setCourseStatus(2)}
          style={{ backgroundColor: "grey" }}
        >
          关闭
        </button>
      </span>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  h2 {
    font-family: "Songti SC";
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 34px;
    margin-top: 20px;
  }

  button {
    margin: 15px 10px;
    width: 120px;
    height: 40px;
    background: #6396f7;
    outline: none;
    border: none;
    box-shadow: 0px 4px 9px rgba(26, 84, 196, 0.24);
    border-radius: 49px;

    font-family: "Songti SC";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 36px;
    letter-spacing: 0.1em;
    cursor: pointer;
    color: #ffffff;
  }
`;
