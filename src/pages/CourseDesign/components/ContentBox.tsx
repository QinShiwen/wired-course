import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useCourseContext } from "../../../context/useCourseContext";
import ExtendTrue from "../../../assets/extend-t.png";
import ExtendFalse from "../../../assets/extend-f.png";
import { ToolBar } from "./ToolBar";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import ExtendImg from "../../../assets/toolbar/extend.png";
import ExtendError from "../../../assets/extendError.png";
import ExtendLoad from "../../../assets/extend-loading.gif";
interface ContentBoxProps {
  content: string;
  part: string;
}

export function ContentBox({ content, part }: ContentBoxProps) {
  const [showButton, setShowButton] = useState<boolean>(false);
  const { extendCourse, setNowCourseContent } = useCourseContext();
  const [nowcontent, setNowcontent] = useState<string>(() => content);
  const [extendIcon, setExtendIcon] = useState<boolean>(false);
  const editorRef = useRef<HTMLDivElement>(null);
  //0 扩展失败 1 正在扩展 2 done
  const [extendStatus, setExtendStatus] = useState<number>(2);

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

  async function handleExtend(){
    setExtendStatus(1);
    let res = await extendCourse(part);
    console.log(res);
    if (res) {
      setExtendStatus(2);
    }else{
      setExtendStatus(0);
    }
  }

  useEffect(() => {
    if (editorRef.current && content) {
      setNowcontent(() => content);
      editorRef.current.innerHTML = nowcontent;
    }
  }, [nowcontent, content]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span className="extend-menu" onClick={handleExtend}>
          <img src={ExtendImg} alt="extend" height={20} />
          请帮我扩展
        </span>
      ),
    },
  ];

  return (
    <Container>
      <div
        className={extendStatus !== 1 ? "show-content" : "show-loading"}
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => handleChange()}
      >
        {extendStatus === 1 ? (
          <div className="extend-loading">
            <img src={ExtendLoad} alt="extendload" width={200} />
          </div>
        ) : (
          <>
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
          </>
        )}

        {extendStatus === 0 ? (
          <div className="extend-error">
            <img src={ExtendError} alt="" height={50} />
            <span>
              <button onClick={() => extendCourse}>重新加载</button>
              <button
                onClick={() => setExtendStatus(2)}
                style={{ backgroundColor: "grey" }}
              >
                关闭
              </button>
            </span>
          </div>
        ) : null}
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

  .show-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #6396f7;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1rem;
  }

  .extend-error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      margin: 15px 10px;
      padding: 5px 10px;
      width: 120px;
      height: 40px;
      background: #6396f7;
      box-shadow: 0px 4px 9px rgba(26, 84, 196, 0.24),
        0px 0px 8px rgba(26, 84, 196, 0.24);
      border-radius: 49px;
      border: none;
      color: #fff;
      cursor: pointer;
    }
  }
`;
