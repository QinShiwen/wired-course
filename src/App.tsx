import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CourseHome } from "./pages/CourseHome";
import { StartForm } from "./pages/startform/StartForm";
import styled from "styled-components";
import { useEffect } from "react";
import "antd/dist/reset.css";
import "./App.css";
import { CourseProvider } from "./context/useCourseContext";

export default function App() {
  return (
    <div className="App">
      <Router>
        <CourseProvider>
          <Route path="/coursehome" element={<CourseHome />} />
          <Route path="/start-form" element={<StartForm />} />
        </CourseProvider>
      </Router>
    </div>
  );
}
