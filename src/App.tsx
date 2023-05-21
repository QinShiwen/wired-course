import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CourseHome } from "./pages/CourseHome";
import { StartForm } from "./pages/startform/StartForm";
import styled from "styled-components";
import { useEffect } from "react";
import "antd/dist/reset.css";
import "./App.css";
import { CourseProvider } from "./context/useCourseContext";
import { CourseDesign } from "./pages/CourseHome/components/CourseDesign";
import { MyCourse } from "./pages/CourseHome/MyCourse";

export default function App() {
  return (
    <div className="App">
      <CourseProvider>
        <Router>
          <Routes>
            <Route path="/coursehome/*" element={<CourseHome />} />
            <Route path="/start-form" element={<StartForm />} />
            {
              /**
               *             <Route path = "/coursehome/course-design" element = {<CourseDesign/>}/>
            <Route path = "/coursehome/my-course" element = {<MyCourse/>}/>
               */
            }

          </Routes>
        </Router>
      </CourseProvider>
    </div>
  );
}
