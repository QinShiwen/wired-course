import styled from "styled-components";
import { useCourseContext } from "../../../context/useCourseContext";

interface InputTagProps {
  tag: string;
  caption: string;
  eg: string;
}

export function InputTag({ caption, eg, tag }: InputTagProps) {
  const { changeInfo } = useCourseContext();

  return (
    <Container>
      <div className="caption">{caption}</div>
      <input
        type="text"
        placeholder={eg}
        onChange={(e) => changeInfo(e.target.value, tag)}
      />
    </Container>
  );
}

const Container = styled.div`
  margin: 50px 0;
  .caption {
    font-family: "Songti SC";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    margin: 20px 0;
  }

  input {
    border: 1.5px solid #6396f7;
    border-radius: 6px;
    width: 500px;
    height: 50px;
    padding: 0.5rem;
    outline: none;
  }
`;
