import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CourseDesign } from "./CourseHome/components/CourseDesign";
import { MyCourse } from "./CourseHome/MyCourse";
import { NavBar } from "./CourseHome/components/NavBar";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

interface CourseHomeProps {}

export const routesInfo = [
  {
    name: "设计课程",
    path: "/coursehome/",
    component: CourseDesign,
  },
  {
    name: "我的课程",
    path: "/coursehome/my-course",
    component: MyCourse,
  },
];

export function CourseHome() {
  const [shownav, setShownav] = useState(true);
  return (
    <>
      <Container>
        <div className="pop-nav">
          <button onClick={() => setShownav(!shownav)}>pop</button>
        </div>

        <div className={shownav ? "slide-in" : "slide-out"}>
          {shownav ? <NavBar /> : null}
        </div>

        <div className="nav-view">
          <Routes>
            <Route path="/*" element={<CourseDesign />} />
            <Route path="/mycourse" element={<MyCourse />} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

const navbarSlideIn = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 13rem;
  }
`;

const navbarSlideOut = keyframes`
  from {
    width: 13rem;
  }
  to {
    width: 0%;
  }
`;

const Container = styled.div`
  .pop-nav {
    position: absolute;
    z-index: 100;
  }
  .slide-in {
    animation: 0.2s ease-in-out 0s 1 normal forwards running ${navbarSlideIn};
  }
  .slide-out {
    animation: 0.2s ease-in-out 0s 1 normal forwards running ${navbarSlideOut};
  }

  display: flex;
  flex-direction: row;
  width: 100vw;
  .nav-view {
    width: 100%;
  }
`;
