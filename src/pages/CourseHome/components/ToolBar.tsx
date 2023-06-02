import styled from "styled-components";

export function ToolBar() {
  return (
    <Container>
      <button>加粗</button>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 100;
  padding: 0.5rem;
  width: 100%;
  background-color: red;
`;
