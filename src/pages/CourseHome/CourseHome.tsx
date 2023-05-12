import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CourseDesign } from "./components/CourseDesign";
import { MyCourse } from "./MyCourse";
import { NavBar } from "./components/NavBar";
import styled from "styled-components";

interface CourseHomeProps {}

const routesInfo = [
  {
    path: "/course-design",
    component: CourseDesign,
  },
  {
    path: "/my-course",
    component: MyCourse,
  },
];

export function CourseHome() {
  return (
    <Router>
      <Container>
        <NavBar />
        <div className="nav-view">
          <Routes>
            { routesInfo.map((route,index) => (
                <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    .nav-view{
        width: 100%;
    }
`;
