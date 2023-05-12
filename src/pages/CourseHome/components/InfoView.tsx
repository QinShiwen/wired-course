import styled from "styled-components";

const data = {
  username: "张三",
};

export function InfoView() {
  return (
    <Container>
      <h1>{data.username}</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5rem;
  width: 100%;
  background: #d9d9d9;

  h1 {
    margin-left: 2rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
