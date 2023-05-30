import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useCourseContext } from "../../../context/useCourseContext";
import { Input } from "antd";
import ExtendTrue from "../../../assets/extend-t.png";
import ExtendFalse from "../../../assets/extend-f.png";

interface ContentBoxProps {
  content: string;
  part: string;
}

export function ContentBox({ content, part }: ContentBoxProps) {
  const [showButton, setShowButton] = useState<boolean>(false);
  const { extendCourse, setCourseinfo } = useCourseContext();
  const [extend, setExtend] = useState<boolean>(true);
  const [nowcontent, setNowcontent] = useState<string>(content);
  const [edit, setEdit] = useState<boolean>(false);
  const { TextArea } = Input;
  const [extendIcon, setExtendIcon] = useState<boolean>(false);

  function handleBlur(e: Event) {
    setCourseinfo((prevCourseinfo: any) => ({
      ...prevCourseinfo,
      [part]: nowcontent,
    }));
    console.log();
    setEdit(false);
  }

  return (
    <Container>
      <div
        className="show-content"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
        onClick={() => setEdit(true)}
      >
        {showButton ? (
          <div
            className="edit-content"
            onMouseEnter={() => setExtendIcon(true)}
            onMouseLeave={() => setExtendIcon(false)}
          >
            {extendIcon ? (
              <img src={ExtendTrue} alt="img" width={35} />
            ) : (
              <img src={ExtendFalse} alt="img" width={30} />
            )}
          </div>
        ) : null}

        <div className="editor" contentEditable="true">
          <ReactMarkdown>{nowcontent}</ReactMarkdown>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 5px;

  .show-content {
    height: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
  }
  .show-content:hover {
    background: rgba(224, 240, 255, 0.8);
    border-radius: 10px;
  }

  .in-extend {
    position: absolute;
  }

  .edit-content {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .editor {
    outline: none;
    border: none;
    cursor: text;
  }

  .edit-content button {
    margin-right: 5px;
  }
`;
