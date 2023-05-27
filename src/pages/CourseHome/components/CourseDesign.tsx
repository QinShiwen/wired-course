import styled from "styled-components";
import { TagsBar } from "./TagsBar";
import { ViewBox } from "./ViewBox";
import {
  CourseProvider,
  useCourseContext,
} from "../../../context/useCourseContext";
import SplitPane from "react-split-pane";
import Pane from "react-split-pane";

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
