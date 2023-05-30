import  { createContext, useContext, useState } from "react";
import axios from "axios";
import { pagesdata } from "../pages/startform/StartForm";

interface CourseContextValue {
  tags: Tags;
  courseinfo: any;
  coursestate: string;
  slide: number;
  fetchCourse: () => void;
  changeInfo: (value: any, key: string) => void;
  extendCourse: (content: string) => void;
  nextSlide: (slidenum: number) => any;
  setCourseinfo: (value: any) => void;
}

interface Tags {
  concept: {
    caption: string;
    information: string;
  };
  grade: {
    caption: string;
    information: string;
  };
  // target: {
  //   caption: string;
  //   information: string;
  // };
  questions: {
    caption: string;
    information: string;
  };
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

const testcourse = {
  "part1": "## 课程导入\n\n让学生观察周围校园中的大树，引导他们思考大树倒下会发生什么事情，并提出驱动性问题：“如果大 树倒了，会砸到我们的教学楼吗？”",

  "part2": "## 教学目标\n\n1. 能够利用工具，测量树的高度。\n2. 能够运用数学知识，计算出树的高度。\n3. 能够发散思维，探究大树倒下的影响。",

  "part3": "## 教学方案\n\n本课程采用PBL模式进行教学。在学生的学习过程中，教师会给予适当的指导与帮助，但不会直接给出答案。学生应该通过自己的思考与探究来完成任务。\n\n本课程所需素材：卷尺、树棍等测量工具。\n\n学生分组完成任务，每组学生需要对一颗大树进行测量，并探究该树倒下可能会产生的影响。",

  "part4": "## 教学步骤\n\n1. 教师引导学生进行思考，讨论大树倒下可能会产生的影响。\n2. 学生分组完成任务。每组学生选择 一颗大树进行测量，记录下树的高度。\n3. 学生利用数学知识，计算出该树距离教学楼有多远，判断是否会影响教学楼的安全。\n4. 学生总结探究，分享各自的发现与感悟。\n5. 教师进行总结和点评，提升学生感知与认知水平。",

  "part5": "## 评估与展示\n\n学生提交测量数据与计算结果，展示自己的探究成果和思考过程，并进行自我评估。教师会根据学生 的表现，反馈学习成果和方向指引。"
}


const CourseProvider = (props: any) => {
  const coursepart: any = {
    part1: "课程导入",
    part2: "教学目标",
    part3: "教学方案",
    part4: "教学步骤",
    part5: "评估与展示",
  };

  const [tags, setTags] = useState<Tags>({
    concept: {
      caption: "请输入您的课程大概念",
      information: "",
    },
    grade: {
      caption: "请输入您所教授的年级",
      information: "",
    },
    questions: {
      caption: "请输入您的驱动性问题",
      information: "",
    },
  });

  const [courseinfo, setCourseinfo] = useState<any>(testcourse);

  //显示状态：备课中 or 课件已生成 or 失败
  const [coursestate, setCoursestate] = useState("success");
  const state = ["processing", "success", "fail"];
  //选课件页面的滑动
  const [slide, setSlide] = useState<number>(0);

  async function fetchCourse() {
    setCoursestate(() => "processing");
    const response = await axios
      .post("http://localhost:5000/prompt-course", {
        concept: tags.concept.information,
        grade: tags.grade.information,
        questions: tags.questions.information,
      })
      .catch((err) => {
        console.log(err);
      });

    //console.log(response?.data);
    console.log(response?.data.res);
    //处理JSON文件中的换行符
    let coursedata = JSON.parse(response?.data.res);
    console.log(coursedata);
    setCourseinfo(() => coursedata);
    setCoursestate(() => "success");
  }

  async function extendCourse(part: string) {
    console.log(part, courseinfo[part], typeof courseinfo[part]);

    const response = await axios
      .post("http://localhost:5000/prompt-extend", {
        part: coursepart[part],
        content: courseinfo[part],
      })
      .catch((err) => {
        console.log(err);
      });
      
    console.log(response);

    setCourseinfo((prevCourseinfo: any) => ({
      ...prevCourseinfo,
      [part]: response?.data.res,
    }));
  }

  function changeInfo(value: any, key: string) {
    setTags((prevTagsInfo: any) => ({
      ...prevTagsInfo,
      [key as keyof typeof prevTagsInfo]: {
        ...prevTagsInfo[key as keyof typeof prevTagsInfo],
        information: value,
      },
    }));
    console.log(tags);
  }

  function nextSlide(slidenum: number) {
    console.log(slidenum, pagesdata.length - 1);
    if (slidenum !== pagesdata.length - 1) {
      setSlide((slide) => slide + 1);
    } else {
      window.location.href = "/coursehome/*";
    }
    return 1;
  }

  const contextValue: CourseContextValue = {
    tags,
    courseinfo,
    coursestate,
    slide,
    fetchCourse,
    changeInfo,
    extendCourse,
    nextSlide,
    setCourseinfo,
  };

  return <CourseContext.Provider value={contextValue} {...props} />;
};

export { useCourseContext, CourseProvider };
