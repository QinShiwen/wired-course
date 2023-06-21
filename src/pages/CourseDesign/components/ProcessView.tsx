import styled from "styled-components";
import FetchLoad from "../../../assets/fetch-loading.gif";

export function ProcessView() {
  return (
    <Container>
      <div className="error">
        <img src={FetchLoad} alt="fetchLoad" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
  }
`;
