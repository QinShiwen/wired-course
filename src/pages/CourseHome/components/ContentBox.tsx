import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useCourseContext } from "../../../context/useCourseContext";
import { Input } from "antd";

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

  function handleBlur() {
    setCourseinfo((prevCourseinfo: any) => ({
      ...prevCourseinfo,
      [part]: nowcontent,
    }));
    setEdit(false);
  }

  return (
    <Container>
      <div
        className="show-content"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        {edit ? (
          <TextArea
            value={nowcontent}
            autoSize
            onChange={(e) => setNowcontent(e.target.value)}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <>
            {" "}
            {showButton ? (
              <div className="edit-content">
                <button onClick={() => setEdit(true)}>编辑</button>
                <button onClick={() => extendCourse(part)}>扩展</button>
              </div>
            ) : (
              ""
            )}
            <ReactMarkdown>{nowcontent}</ReactMarkdown>
          </>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 5px;

  .show-content {
    height: 100%;
    position: relative;
  }
  .show-content:hover {
    background-color: #d9d9d9;
  }

  .in-extend {
    position: absolute;
  }

  .edit-content {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .edit-content button {
    margin-right: 5px;
  }
`;
