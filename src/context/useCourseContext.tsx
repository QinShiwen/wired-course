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


let testcourse: { [key: string]: string } = {
  "part1": "## 课程导入\n\n让学生观察周围校园中的大树，引导他们思考大树倒下会发生什么事情，并提出驱动性问题：“如果大 树倒了，会砸到我们的教学楼吗？”",
  "part2": "## 教学目标\n\n1. 能够利用工具，测量树的高度。\n2. 能够运用数学知识，计算出树的高度。\n3. 能够发散思维，探究大树倒下的影响。",
  "part3": "## 教学方案\n\n本课程采用PBL模式进行教学。在学生的学习过程中，教师会给予适当的指导与帮助，但不会直接给出答案。学生应该通过自己的思考与探究来完成任务。\n\n本课程所需素材：卷尺、树棍等测量工具。\n\n学生分组完成任务，每组学生需要对一颗大树进行测量，并探究该树倒下可能会产生的影响。",
  "part4": "## 教学步骤\n\n1. 教师引导学生进行思考，讨论大树倒下可能会产生的影响。\n2. 学生分组完成任务。每组学生选择 一颗大树进行测量，记录下树的高度。\n3. 学生利用数学知识，计算出该树距离教学楼有多远，判断是否会影响教学楼的安全。\n4. 学生总结探究，分享各自的发现与感悟。\n5. 教师进行总结和点评，提升学生感知与认知水平。",
  "part5": "## 评估与展示\n\n学生提交测量数据与计算结果，展示自己的探究成果和思考过程，并进行自我评估。教师会根据学生 的表现，反馈学习成果和方向指引。"
}

for(let i in testcourse){
  testcourse[i] = marked.parse(testcourse[i])
}

const CourseProvider = (props: any) => {
  const navigate = useNavigate();

  // start page slide control
  const [slide, setSlide] = useState<number>(0);

  const [promptData, setPromptData] = useState<promptData>(() => {
    const storedData = sessionStorage.getItem("promptdata");
    console.log(storedData);
    return storedData
      ? JSON.parse(storedData)
      : {
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
      ? setSlide(() => slidenum + 1)
      : (() => {
          sessionStorage.setItem("promptdata", JSON.stringify(promptData));
          setTimeout(() => navigate("/coursehome"), 100);
        })();
  }

  function updatePromptData(value: any, key: string) {
    setPromptData(() => ({
      ...promptData,
      [key]: value,
    }));
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
        setCourseStatus(() => 0);
        return;
      });
    console.log(response?.data.res);
    //成功返回课程
    if (response?.data.res.status === 1) {
      setCourseStatus(() => 2);
      let resCourse = JSON.parse(response.data.res.data);
      for (let i in resCourse) {
        resCourse[i] = marked.parse(resCourse[i]);
      }
      setNowCourseContent(() => resCourse);
      console.log(nowCourseContent);
      //setCourseHistory((prev)=>[...prev, {promptData: promptData, courseContent: resCourse}])
      //localStorage.setItem('course-history', JSON.stringify(courseHistory))
    } else {
      setCourseStatus(() => 0);
    }
  }

  //extend course
  async function extendCourse(part: string) {
    let reqpart = nowCourseContent[part];
    let response = await axios
      .post("http://localhost:5000/extend-course", {
        content: reqpart,
      })
      .catch((err) => {
        console.log(err);
        setCourseStatus(() => 0);
        return;
      });
    if (response?.data.res.status === 1) {
      let extendCourse = JSON.parse(response.data.res.data);
      setNowCourseContent(() => ({
        ...nowCourseContent,
        [part]: extendCourse,
      }));
      return true;
    }else{
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
  };

  return <CourseContext.Provider value={contextValue} {...props} />;
};

export { useCourseContext, CourseProvider };
