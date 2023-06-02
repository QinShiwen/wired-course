import styled from "styled-components";
import { useCourseContext } from "../../../context/useCourseContext";

export function ToolBar() {
  const { handleCommand } = useCourseContext();

  return (
    <Container>
      <button onClick={() => handleCommand("bold")}>B</button>
      <button onClick={() => handleCommand("h1")}>h1</button>
      <button onClick={() => handleCommand("h2")}>h2</button>
      <button onClick={() => handleCommand("p")}>p</button>
      <button onClick={() => handleCommand("forecolor|#DC143C")}>red</button>
      <button onClick={() => handleCommand("forecolor|#7CFC00")}>green</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
