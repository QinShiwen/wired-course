import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useCourseContext } from "../../../context/useCourseContext";
import ExtendTrue from "../../../assets/extend-t.png";
import ExtendFalse from "../../../assets/extend-f.png";
import { ToolBar } from "./ToolBar";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import ExtendImg from "../../../assets/toolbar/extend.png";

interface ContentBoxProps {
  content: string;
  part: string;
}

export function ContentBox({ content, part }: ContentBoxProps) {
  const [showButton, setShowButton] = useState<boolean>(false);
  const { extendCourse, setNowCourseContent } = useCourseContext();
  const [nowcontent, setNowcontent] = useState<string>(content);
  const [edit, setEdit] = useState<boolean>(false);
  const [extendIcon, setExtendIcon] = useState<boolean>(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span className="extend-menu" onClick={()=>extendCourse}>
          <img src={ExtendImg} alt="extend" height={20}/>
          请帮我扩展
        </span>
      ),
    },
  ];

  function handleChange() {
    setShowButton(false);
    if (editorRef.current) {
      setNowcontent(editorRef.current.innerHTML);
    }
    // console.log(nowcontent);
    setNowCourseContent((prevCourseinfo: any) => ({
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
              style={{ marginLeft: "5px" }}
            >
              <Dropdown menu={{ items }}>
                {extendIcon ? (
                  <img src={ExtendTrue} alt="img" width={30} height={30} />
                ) : (
                  <img src={ExtendFalse} alt="img" width={30} height={30} />
                )}
              </Dropdown>
            </div>
          </div>
        ) : null}
        <div className="editor" contentEditable="true" ref={editorRef} />
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
