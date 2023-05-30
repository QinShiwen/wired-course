import { useCourseContext } from "../../../context/useCourseContext";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { ContentBox } from "./ContentBox";
import { ErrorView } from "./ErrorView";
import { ProcessView } from "./ProcessView";

export function CourseView() {
  const { courseinfo, coursestate } = useCourseContext();
  const [showButton, setShowButton] = useState<boolean>(false);

  return (
    <Container>
      <div className="tool-bar"><button>加粗</button></div>
      <div className="show-result">
        {coursestate === "fail" ? <ErrorView /> : null}
        {coursestate === "processing" ? <ProcessView /> : null}
        {courseinfo &&
          Object.keys(courseinfo).map((content, key) => {
            return (
              <ContentBox
                key={key}
                part={content}
                content={courseinfo[content]}
              />
            );
          })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 3rem;

  .show-content {
    margin: 1rem;
    padding: 1rem;
  }

  .show-result{
    display: flex;
    flex-direction: column;
  }

  .tool-bar {
    padding: 0.5rem;
    width:100%;
    background-color: red;
  }
`;
