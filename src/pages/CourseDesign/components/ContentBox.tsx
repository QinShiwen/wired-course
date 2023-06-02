import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useCourseContext } from "../../../context/useCourseContext";
import ExtendTrue from "../../../assets/extend-t.png";
import ExtendFalse from "../../../assets/extend-f.png";
import { ToolBar } from "./ToolBar";

interface ContentBoxProps {
  content: string;
  part: string;
}

export function ContentBox({ content, part }: ContentBoxProps) {
  const [showButton, setShowButton] = useState<boolean>(false);
  const { extendCourse, setCourseinfo,handleCommand } = useCourseContext();
  const [extend, setExtend] = useState<boolean>(true);
  const [nowcontent, setNowcontent] = useState<string>(content);
  const [edit, setEdit] = useState<boolean>(false);
  const [extendIcon, setExtendIcon] = useState<boolean>(false);
  const editorRef = useRef<HTMLDivElement>(null);

  
  function handleChange() {
    setShowButton(false);
    //console.log("change",editorRef.current?.innerHTML);
    if (editorRef.current) {
      setNowcontent(editorRef.current.innerHTML);
    }
    console.log(nowcontent);
    setCourseinfo((prevCourseinfo: any) => ({
      ...prevCourseinfo,
      [part]: nowcontent,
    }));
  }

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = nowcontent;
    }
  });

  return (
    <Container>
      <div
        className="show-content"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => handleChange()}
        onClick={() => setEdit(true)}
      >
        {showButton ? (
          <div className="edit-content">
            <ToolBar />
            <div
              onMouseEnter={() => setExtendIcon(true)}
              onMouseLeave={() => setExtendIcon(false)}
            >
              {extendIcon ? (
                <img src={ExtendTrue} alt="img" width={35} />
              ) : (
                <img src={ExtendFalse} alt="img" width={30} />
              )}
            </div>
          </div>
        ) : null}
        <div
          className="editor"
          contentEditable="true"
          ref={editorRef}
        />
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
    padding: 1rem;
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
    display: flex;
    flex-direction: row;
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
