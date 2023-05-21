import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { CourseDesign } from "./CourseHome/components/CourseDesign";
import { MyCourse } from "./CourseHome/MyCourse";
import { NavBar } from "./CourseHome/components/NavBar";
import styled from "styled-components";

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
  return (
    <>
      <Container>
        <NavBar />
        <div className="nav-view">
          <Routes>
            <Route path = "/*" element = {<CourseDesign />}/>
            <Route path = "/mycourse" element = {<MyCourse />}/>
            {/*routesInfo.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))*/}
          </Routes>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  .nav-view {
    width: 100%;
  }
`;
