import { useCourseContext } from "../../../context/useCourseContext";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ContentBox } from "./ContentBox";
import { ErrorView } from "./ErrorView";
import { ProcessView } from "./ProcessView";
import { ToolBar } from "./ToolBar";
export function CourseView() {
  const { courseinfo, coursestate } = useCourseContext();
  const [showButton, setShowButton] = useState<boolean>(false);

  return (
    <Container>
      <ToolBar />
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
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
`;
