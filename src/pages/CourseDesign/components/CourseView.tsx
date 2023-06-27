import { useCourseContext } from "../../../context/useCourseContext";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ErrorView } from "./ErrorView";
import { ProcessView } from "./ProcessView";
import { ToolBar } from "./ToolBar";
import { ContentBox } from "./ContentBox";

export function CourseView() {
  const { nowCourseContent, courseStatus } = useCourseContext();

  // useEffect(() => {
  //   console.log(nowCourseContent);
  // }, [nowCourseContent]);

  return (
    <Container>
      <div className="show-result">
        {courseStatus === 0 ? <ErrorView /> : null}
        {courseStatus === 1 ? (
          <ProcessView />
        ) : (
          nowCourseContent &&
          Object.keys(nowCourseContent).map((content, key) => {
            return (
              <ContentBox
                key={key}
                part={content}
                content={nowCourseContent[content]}
              />
            );
          })
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 3rem;
  font-family: "Songti SC";
  
  .show-result {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
`;
