import styled from "styled-components";

export function ErrorView() {
  return (
    <Container>
      <div className="error">
        <h1>Error</h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
