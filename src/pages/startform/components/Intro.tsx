import styled from "styled-components";

interface introProps {
  intro: {
    name: string;
    content: string[];
  };
}

export function Intro({ intro }: introProps) {
  return (
    <Container>
      <h2>{intro.name}</h2>
      {intro.content.map((item: any, index: number) => {
        return <p key={index}>{item}</p>;
      })}
    </Container>
  );
}

const Container = styled.div`
  h2 {
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-color: #6396f7;
  }
`;
