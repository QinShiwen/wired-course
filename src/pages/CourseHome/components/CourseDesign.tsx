import styled from "styled-components";
import { TagsBar } from "./TagsBar";
import { ViewBox } from "./ViewBox";
import { CourseProvider, useCourseContext } from "./useCourseContext";

interface CourseDesignProps {}

export function CourseDesign() {
  return (
    <Container>
      <CourseProvider>
        <TagsBar />
        <ViewBox />
      </CourseProvider>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
