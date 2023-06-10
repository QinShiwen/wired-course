import styled from "styled-components";
import { useCourseContext } from "../../../context/useCourseContext";
import { Input } from "antd";
interface InputTagProps {
  tag: string;
  caption: string;
  eg: string;
  setInputvalue:(value:any)=>any;
}

export function InputTag({ caption, eg, tag, setInputvalue }: InputTagProps) {
  const { changeInfo } = useCourseContext();
  const { TextArea } = Input;
  return (
    <Container>
      <div className="caption">{caption}</div>
      <TextArea
        autoSize
        placeholder={eg}
        onChange={(e)=>setInputvalue(e.target.value)}
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

  textarea {
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 30rem;
    font-size: 1rem;
    padding: 0.4rem;
    resize: none;
  }
`;
