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
  paginationChange: (page: number) => void;
  setCourseStatus: (status: number) => void;
}

interface promptData {
  concept: string;
  grade: string;
  target: string;
  questions: string;
}

interface courseData {
  promptData: promptData;
  courseContent: any;
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

  const [promptData, setPromptData] = useState<promptData>(()=>{
    const storedData = sessionStorage.getItem('promptdata');
    console.log(storedData)
    return storedData ? JSON.parse(storedData) : {
      concept: "",
      grade: "",
      target: "",
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
  const [courseStatus, setCourseStatus] = useState<number>(2);

  // start page slide control
  function nextSlide(slidenum: number) {

    slidenum !== pagedata.length - 1
      ? setSlide(()=>slidenum + 1)
      : (() => {
          sessionStorage.setItem("promptdata", JSON.stringify(promptData));
          setTimeout(() => navigate("/coursehome"), 100);
        })();
  }



  function updatePromptData(value: any, key: string) {
    setPromptData(()=>({
      ...promptData,
      [key]: value,
    }))
    // console.log(promptData);
  }

  function paginationChange(page: number) {
    // 
    
    // save the current course content
    // setCourseHistory((prev)=>[...prev, {promptData: promptData, courseContent: nowCourseContent}])
    // setNowCourseIndex(()=>page-1)
    // setNowCourseContent(()=>courseHistory[page-1].courseContent)
    // setPromptData(()=>courseHistory[page-1].promptData)
    // setCourseStatus(()=>2)
  }

  function handleStyleCommand(command: string) {
    if (
      command.includes("color") ||
      command.includes("backcolor") ||
      command.includes("forecolor")
    ) {
      let result = command.split("|");
      document.execCommand(result[0], false, result[1]);
    }
    if (command === "h1" || command === "h2" || command === "p") {
      document.execCommand("formatBlock", false, command);
    } else {
      document.execCommand(command, false, "null");
    }
  }

  //generate course
  async function fetchCourse() {
    //1. 将状态设置为loading
    setCourseStatus(() => 1);
    //2. 获取课程数据
    const response = await axios
      .post("http://localhost:5000/prompt-course", {
        concept: promptData.concept,
        grade: promptData.grade,
        target: promptData.target,
        questions: promptData.questions,
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(response?.data.res);
    //成功返回课程
    if(response?.data.res.status === 1){
      setCourseStatus(()=>2)
      let resCourse = JSON.parse(response.data.res.data);
      for (let i in resCourse) {
        resCourse[i] = marked.parse(resCourse[i]);
      }
      setNowCourseContent(()=>resCourse)
      console.log(nowCourseContent)
      //setCourseHistory((prev)=>[...prev, {promptData: promptData, courseContent: resCourse}])
      //localStorage.setItem('course-history', JSON.stringify(courseHistory))
    }else{
      setCourseStatus(()=>0)
    }
  }

  //extend course
  async function extendCourse(part: string) {
    

  }

  useEffect(() => {

  }, [promptData]);

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
    extendCourse,
    paginationChange,
    setCourseStatus,
  };

  return <CourseContext.Provider value={contextValue} {...props} />;
};

export { useCourseContext, CourseProvider };
