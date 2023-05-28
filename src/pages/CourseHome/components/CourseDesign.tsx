import styled, { keyframes } from "styled-components";
import { TagsBar } from "./TagsBar";
import { ViewBox } from "./ViewBox";
import {
  CourseProvider,
  useCourseContext,
} from "../../../context/useCourseContext";
import { useState } from "react";
import SplitPane from "react-split-pane";
import Pane from "react-split-pane";

interface CourseDesignProps {}

export function CourseDesign() {
  const [showtags, setShowtags] = useState(true);

  return (
    <Container>
      <CourseProvider>
        <div className={showtags ? "slide-in" : "slide-out"}>
          {showtags ? <TagsBar /> : null}
        </div>
        <div className="view-box">
          <div className="pop-tags">
            <button onClick={() => setShowtags(!showtags)}>pop</button>
          </div>
          <ViewBox />
        </div>
      </CourseProvider>
    </Container>
  );
}

const navbarSlideIn = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 20rem;
  }
`;

const navbarSlideOut = keyframes`
  from {
    width: 20rem;
  }
  to {
    width: 0%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  .slide-in {
    width: 20rem;
    animation: 0.2s ease-in-out 0s 1 normal forwards running ${navbarSlideIn};
  }
  .slide-out {
    animation: 0.2s ease-in-out 0s 1 normal forwards running ${navbarSlideOut};
  }
  .pop-tags {
    position: absolute;
    z-index: 20;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  }

  .pop-tags button {
    box-shadow: 5px 4px 25px rgba(0, 0, 0, 0.25);
  }

  .view-box {
    width: 100%;
    height: 100vh;
  }
`;
