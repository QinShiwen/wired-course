import styled from "styled-components";
import { useCourseContext } from "../../../context/useCourseContext";

export function ToolBar() {
  const { handleStyleCommand } = useCourseContext();

  return (
    <Container>
      <button onClick={() => handleStyleCommand("bold")}>B</button>
      <button onClick={() => handleStyleCommand("h1")}>h1</button>
      <button onClick={() => handleStyleCommand("h2")}>h2</button>
      <button onClick={() => handleStyleCommand("p")}>p</button>
      <button onClick={() => handleStyleCommand("forecolor|#DC143C")}>red</button>
      <button onClick={() => handleStyleCommand("forecolor|#7CFC00")}>green</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
