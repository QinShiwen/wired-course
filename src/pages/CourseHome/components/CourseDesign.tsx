import styled from "styled-components";
import { TagsBar } from "./TagsBar";
import { ViewBox } from "./ViewBox";

interface CourseDesignProps {}


const pagedata = {
  account: {},
  tagsinfo: [],
  courseinfo: {},
};

export function CourseDesign() {
  return (
    <Container>
      <TagsBar />
      <ViewBox />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
