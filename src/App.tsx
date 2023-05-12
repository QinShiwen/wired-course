import { CourseHome } from "./pages/CourseHome/CourseHome";
import styled from "styled-components";
import { useEffect } from "react";
import "antd/dist/reset.css";
import "./App.css";


export default function App() {
  useEffect(() => {
    console.log(styled);
  });
  return (
    <div className="App">
      <CourseHome />
    </div>
  );
}
