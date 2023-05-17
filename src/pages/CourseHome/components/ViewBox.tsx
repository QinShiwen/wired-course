import styled from "styled-components";
import { InfoView } from "./InfoView";
import { CourseView } from "./CourseView";

export function ViewBox() {
  return (
    <Container>
      <InfoView />
      <CourseView />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
