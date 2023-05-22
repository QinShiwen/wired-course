import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useCourseContext } from "../../../context/useCourseContext";

interface ContentBoxProps {
  content: string;
  part:string;
}

export function ContentBox({ content,part }: ContentBoxProps) {
  const [showButton, setShowButton] = useState<boolean>(false);
  const { extendCourse } = useCourseContext();
  const [extend, setExtend] = useState<boolean>(true);

  return (
    <Container>
      <div
        className="show-content"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        {showButton ? (
          <div className="edit-content">
            <button>编辑</button>
            <button onClick={() => extendCourse(part)}>扩展</button>
          </div>
        ) : (
          ""
        )}
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 5px;

  .show-content {
    height: 100%;
  }
  .show-content:hover {
    background-color: #d9d9d9;
  }

  .in-extend {
    position: absolute;
    
  }

  .edit-content {
    position: absolute;
    right: 40px;
  }
`;
