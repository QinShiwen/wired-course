import styled from "styled-components";
import { useEffect } from "react";
interface TagBoxProps {
  key: any;
  caption: string;
  information: any;
  changeInfo: (value: any, index: number) => void;
}

export function TagBox({ key, caption, information, changeInfo }: TagBoxProps) {
  useEffect(() => {
    const textarea = document.querySelector("textarea");

    textarea?.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  });

  return (
    <Container>
      <div className="tag-caption">{caption}</div>
      <div className="tag-info">
        <textarea
          value={information}
          onChange={(e) => changeInfo(e.target.value, key)}
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

  .tag-info {
    width: 12rem;
    max-height: 10rem;
    overflow-y: auto;
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }

  textarea {
    overflow: hidden;
    wrap:virtual;
    width: 100%;
    height: auto;
    border: none;
    outline: none;
    resize: auto;
    padding: 10px;
    box-sizing: border-box;
    word-wrap: break-word;
    overflow-wrap: break-word;
    background: transparent;
  }
`;
