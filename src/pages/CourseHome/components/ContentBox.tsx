import styled from "styled-components";
import ReactMarkdown from "react-markdown";

interface ContentBoxProps {
  coursecontent: string;
}

export function ContentBox({ coursecontent }: ContentBoxProps) {
  function editCourseContent() {
    console.log("edit course content");
  }

  return (
    <Container>
      <div className = "show-content" >
        <ReactMarkdown>{JSON.parse(coursecontent)}</ReactMarkdown>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px;
  .show-content{
    height: 100%;
  }
  .show-content:hover {
    background-color: #fff;
  }
`;
