import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { marked } from "marked";
import { useNavigate } from "react-router-dom";
import { pagedata } from "../pages/StartForm/pagesdata";

interface CourseContextValue {
  slide: number;
  promptData: promptData;
  nowCourseIndex: number;
  nowCourseContent: any;
  courseStatus: number;
  courseHistory: courseData[];
  nextSlide: (slidenum: number) => void;
  setNowCourseContent: (value: any) => void;
  updatePromptData: (value: any, key: string) => void;
  fetchCourse: () => void;
  extendCourse: (part: string) => void;
  handleStyleCommand: (command: string) => void;
}

interface promptData {
  concept: string;
  grade: string;
  questions: string;
}

interface courseData {
  promptData: promptData;
  courseContent:any
}

const CourseContext = createContext<CourseContextValue>(
  {} as CourseContextValue
);

const useCourseContext = () => {
  const context = useContext(CourseContext);
  return {
    ...context,
  };
};

const CourseProvider = (props: any) => {

  const navigate = useNavigate();

  // start page slide control
  const [slide, setSlide] = useState<number>(0);

  // initail prompt data
  const [promptData, setPromptData] = useState<promptData>(()=>{
    const storedData = localStorage.getItem('promptdata');
    console.log(storedData)
    return storedData ? JSON.parse(storedData) : {
      concept: "",
      grade: "",
      questions: "",
    };
  });

  // data history
  const [courseHistory, setCourseHistory] = useState<courseData[]>([]);

  // record current course index
  const [nowCourseIndex, setNowCourseIndex] = useState<number>(0);

  // record current course content
  const [nowCourseContent, setNowCourseContent] = useState<any>(null);

  // record current state of course  0:error 1:loading 2:done
  const [courseStatus, setCourseStatus] = useState<number>(1);

  // start page slide control
  function nextSlide(slidenum: number) {
    slidenum !== pagedata.length - 1
      ? setSlide(slidenum + 1)
      : (() => {
        localStorage.setItem("promptdata", JSON.stringify(promptData))
        navigate("/coursehome")  
      })();
  }

  function updatePromptData(value: any, key: string) {
    setPromptData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleStyleCommand(command: string) {

  }

  //generate course
  async function fetchCourse() {

  }

  //extend course
  async function extendCourse(part: string) {}

  const contextValue: CourseContextValue = {
    slide,
    promptData,
    courseStatus,
    nowCourseIndex,
    nowCourseContent,
    courseHistory,
    nextSlide,
    updatePromptData,
    setNowCourseContent,
    handleStyleCommand,
    fetchCourse,
    extendCourse
  };

  return <CourseContext.Provider value={contextValue} {...props} />;
};

export { useCourseContext, CourseProvider };
