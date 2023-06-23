import { Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import NavPop from "../../assets/popout-nav.png";
import { CourseDesign } from "../CourseDesign/CourseDesign";
import { MyCourse } from "../MyCourse/MyCourse";
import designIcon from "../../assets/router/course-design-1.png"
import collectIcon from "../../assets/router/course-collect-2.png"

export const routesInfo = [
  {
    name: "设计课程",
    path: "/coursehome",
    component: CourseDesign,
    icon: designIcon,
    active: true,
  },
  {
    name: "我的课程",
    path: "/my-course",
    component: MyCourse,
    icon: collectIcon,
    active: false,
  },
];

export function CourseHome() {
  const [shownav, setShownav] = useState(true);
  return (
    <>
      <Container>
        <div className="pop-nav" onClick={() => setShownav(!shownav)}>
          <img src = {NavPop} alt="img" width={30}/>
        </div>

        <div className={shownav ? "slide-in" : "slide-out"}>
          {shownav ? <NavBar /> : null}
        </div>

        <div className="nav-view">
          <Routes>
            <Route path="/" element={<CourseDesign />} />
            <Route path="/my-course" element={<MyCourse />} />
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
    width: 15rem;
  }
`;

const navbarSlideOut = keyframes`
  from {
    width: 15rem;
  }
  to {
    width: 0%;
  }
`;

const Container = styled.div`
  .pop-nav {
    position: absolute;
    z-index: 100;
    margin-top: 1rem;
    margin-left: 1rem;
    cursor: pointer;
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
