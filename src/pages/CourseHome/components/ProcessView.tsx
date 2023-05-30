import styled from "styled-components";

export function ProcessView() {
  return (
    <Container>
      <div className="error">
        <h1>课程加载中</h1>
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
