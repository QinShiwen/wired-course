import { TagBox } from "./TagBox";
import styled from "styled-components";
import { Space } from "antd";
import { useCourseContext } from "../../../context/useCourseContext";

export function TagsBar() {
  const { tags, fetchCourse, changeInfo } = useCourseContext();

  return (
    <Container>
      <Space direction="vertical" size={30}>
        {tags &&
          Object.entries(tags).map(([key, tagInfo]) => (
            <TagBox
              key={key}
              tagnum = {key}
              caption={tagInfo.caption}
              information={tagInfo.information}
              changeInfo={(value) => changeInfo(value, key)}
            />
          ))}
      </Space>
      <div className="ready-prompt">
        <button className = "prompt-button" onClick={fetchCourse}>生成课件</button>
        <button className = "stop-button">课件生成中</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  box-shadow: 5px 4px 25px rgba(0, 0, 0, 0.25);

  .ready-prompt {
    margin-top: 2rem;
  }

  textarea {
    caret-color: #6396f6;
  }

  .prompt-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 150px;
    height: 48px;
    justify-content: center;
    border: none;
    background: #6396f7;
    box-shadow: 0px 20px 50px rgba(46, 46, 46, 0.05);
    border-radius: 47px;
    color: #ffffff;
    cursor: pointer;
  }

  .stop-button {
    margin:5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 150px;
    height: 48px;
    justify-content: center;
    border: none;
    background: grey;
    color: #ffffff;
    box-shadow: 0px 20px 50px rgba(46, 46, 46, 0.05);
    border-radius: 47px;
    cursor: not-allowed;
  }
`;
