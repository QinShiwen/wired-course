import { useCourseContext } from "./useCourseContext";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export function CourseView() {
  const { courseinfo, coursestate } = useCourseContext();

  return (
    <Container>
      {coursestate ? (
        <ReactMarkdown>{courseinfo}</ReactMarkdown>
      ) : (
        "备课中。。。"
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow: auto;
`;
