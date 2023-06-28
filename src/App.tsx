import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { CourseHome } from "./pages/CourseHome/CourseHome";
import { StartForm } from "./pages/StartForm/StartForm";
import "antd/dist/reset.css";
import "./App.css";
import { CourseProvider } from "./context/useCourseContext";
import "animate.css";

export default function App() {

  return (
    <div className="App">
      <Router>
        <CourseProvider>
          <Routes>
            <Route path="/start-form" element={<StartForm />} />
            <Route path="/coursehome/*" element={<CourseHome />} />
          </Routes>
        </CourseProvider>
      </Router>
    </div>
  );
}
