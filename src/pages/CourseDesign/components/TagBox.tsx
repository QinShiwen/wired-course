import styled from "styled-components";
import { useEffect } from "react";
import { Input } from "antd";
interface TagBoxProps {
  tagnum: any;
  caption: string;
  information: any;
  changeInfo: (value: any, index: number) => void;
}

export function TagBox({
  tagnum,
  caption,
  information,
  changeInfo,
}: TagBoxProps) {
  const { TextArea } = Input;

  return (
      <Container>
        <div className="tag-caption">{caption}</div>
        <div className="tag-info">
          <TextArea
            autoSize
            value={information}
            onChange={(e) => changeInfo(e.target.value, tagnum)}
          />
        </div>
      </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .tag-caption {
    color: #a098ae;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
  }

  select {
    padding: 2px 10px 2px 10px;
    width: 12rem;
    height: 3rem;
    border: none;
    outline: none;

    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }

  textarea {
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 12rem;
    font-size: 1rem;
    padding: 0.4rem;
    resize: none;
  }
`;
