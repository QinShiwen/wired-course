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
  extendCourse: (part: string) => any;
  handleStyleCommand: (command: string) => void;
  paginationChange: (page: number) => void;
  setCourseStatus: (status: number) => void;
  updateCourseContent: (content: any) => void;
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

  // data history
  const [courseHistory, setCourseHistory] = useState<courseData[]>(() => {
    const storedData = localStorage.getItem("coursehistory");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [promptData, setPromptData] = useState<promptData>(() => {
    const storedData = sessionStorage.getItem("promptdata");
    return storedData
      ? JSON.parse(storedData)
      : courseHistory.length > 0
      ? courseHistory[courseHistory.length - 1].promptData
      : {
          concept: "",
          grade: "",
          target: "",
          questions: "",
        };
  });

  // record current course index
  const [nowCourseIndex, setNowCourseIndex] = useState<number>(courseHistory.length>0?courseHistory.length-1:0);

  // record current course content
  const [nowCourseContent, setNowCourseContent] = useState<any>(() =>
    courseHistory.length > 0
      ? courseHistory[courseHistory.length - 1].courseContent
      : null
  );

  // record current state of course  0:error 1:loading 2:done
  const [courseStatus, setCourseStatus] = useState<number>(2);

  // start page slide control
  function nextSlide(slidenum: number) {
    slidenum !== pagedata.length - 1
      ? setSlide(() => slidenum + 1)
      : (() => {
          sessionStorage.setItem("promptdata", JSON.stringify(promptData));
          setTimeout(() => navigate("/coursehome"), 100);
        })();
  }

  function updatePromptData(value: any, key: any) {
    setPromptData(() => ({
      ...promptData,
      [key]: value,
    }));
  }

  function updateCourseContent() {}

  function paginationChange(page: number) {
    setPromptData(() => courseHistory[page - 1].promptData);
    setNowCourseIndex(() => page - 1);
    setNowCourseContent(() => courseHistory[page - 1].courseContent);
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
      .post("http://34.94.63.61:5000/prompt-course", {
        concept: promptData.concept,
        grade: promptData.grade,
        target: promptData.target,
        questions: promptData.questions,
      })
      .catch((err) => {
        console.log(err);
        setCourseStatus(() => 0);
        return;
      });
    console.log(response?.data.res);
    //成功返回课程
    if (response?.data.res.status === 1) {
      let resCourse = JSON.parse(response.data.res.data);
      console.log(resCourse);
      for (let i in resCourse) {
        resCourse[i] = marked.parse(resCourse[i]);
      }
      setNowCourseContent(() => resCourse);
      console.log(nowCourseContent);
      let historycontainer = courseHistory;
      historycontainer.push({
        promptData: promptData,
        courseContent: resCourse,
      });
      setCourseHistory(() => historycontainer);
      setNowCourseIndex(() => courseHistory.length);

      localStorage.setItem("coursehistory", JSON.stringify(courseHistory));
      console.log(courseHistory);
      setCourseStatus(() => 2);
    } else {
      setCourseStatus(() => 0);
    }
  }

  //extend course
  async function extendCourse(part: string) {
    let htmlContent = nowCourseContent[part];
    var textContent = htmlContent.replace(/<[^>]+>/g, "");
    console.log(textContent);
    let response = await axios
      .post("http://34.94.63.61:5000/prompt-extend", {
        content: textContent,
      })
      .catch((err) => {
        console.log(err);
        return;
      });
    if (response?.data.res.status === 1) {
      let extendCourse = marked.parse(response.data.res.data);
      // console.log(nowCourseContent[part] + extendCourse);
      let historycontainer = courseHistory;
      historycontainer[nowCourseIndex].courseContent[part] =
        nowCourseContent[part] + extendCourse;
      setCourseHistory(() => historycontainer);
      localStorage.setItem("coursehistory", JSON.stringify(courseHistory));
      setNowCourseContent(() => ({
        ...nowCourseContent,
        [part]: nowCourseContent[part] + extendCourse,
      }));
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {}, [promptData]);

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
    updateCourseContent,
  };

  return <CourseContext.Provider value={contextValue} {...props} />;
};

export { useCourseContext, CourseProvider };
