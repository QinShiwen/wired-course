import { useCourseContext } from "../../../context/useCourseContext";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ErrorView } from "./ErrorView";
import { ProcessView } from "./ProcessView";
import { ToolBar } from "./ToolBar";
import { ContentBox } from "./ContentBox";

export function CourseView() {
  const { courseinfo, coursestate } = useCourseContext();
  return (
    <Container>
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
  padding: 0 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 3rem;

  .show-result{
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
`;
