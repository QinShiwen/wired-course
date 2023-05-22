import { useCourseContext } from "../../../context/useCourseContext";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { ContentBox } from "./ContentBox";
export function CourseView() {
  
  const { courseinfo, coursestate } = useCourseContext();
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    console.log(courseinfo);
  });

  return (
    <Container>
      {courseinfo && Object.keys(courseinfo).map((content, key) => {
        return <ContentBox key={key} part = {content} content={courseinfo[content]} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow: auto;

  .show-content {
    margin: 1rem;
    padding: 0 1rem;
  }
`;
