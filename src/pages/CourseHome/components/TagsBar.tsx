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
              caption={tagInfo.caption}
              information={tagInfo.information}
              changeInfo={(value) => changeInfo(value, key)}
            />
          ))}
      </Space>
      <div className="ready-prompt">
        <button onClick={fetchCourse}>生成课件</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 100vh;
  box-shadow: 5px 4px 25px rgba(0, 0, 0, 0.25);

  .ready-prompt {
    margin-top: 2rem;
  }

  button {
    width: 10rem;
    height: 2rem;
  }
`;
