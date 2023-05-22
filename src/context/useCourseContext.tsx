import React, {
  FC,
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";
import axios from "axios";
import { pagesdata } from "../pages/startform/StartForm";
import { NumberLiteralType } from "typescript";
interface CourseContextValue {
  tags: Tags;
  courseinfo: any;
  coursestate: boolean;
  slide: number;
  fetchCourse: () => void;
  changeInfo: (value: any, key: string) => void;
  extendCourse: (content: string) => void;
  nextSlide: (slidenum: number) => any;
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
  target: {
    caption: string;
    information: string;
  };
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

const CourseProvider = (props: any) => {
  const [tags, setTags] = useState<Tags>({
    concept: {
      caption: "请输入您的课程大概念",
      information: "测量树的高度",
    },
    grade: {
      caption: "请输入您所教授的年级",
      information: "一年级",
    },
    target: {
      caption: "请输入您的授课目标",
      information: "拓展孩子发散思维，让孩子一边发散思维一边学习数学知识",
    },
    questions: {
      caption: "请输入您的驱动性问题",
      information: "如果大树倒了，会砸到我们的教学楼吗？",
    },
  });

  const [courseinfo, setCourseinfo] = useState<any>(null);

  //显示状态：备课中 - 课件已生成
  const [coursestate, setCoursestate] = useState<boolean>(false);

  //选课件页面的滑动
  const [slide, setSlide] = useState<number>(0);

  async function fetchCourse() {
    setCoursestate(() => false);
    const response = await axios
      .post("http://localhost:5000/prompt-course", {
        concept: tags.concept.information,
        grade: tags.grade.information,
        target: tags.target.information,
        questions: tags.questions.information,
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(response?.data.res);
    //处理JSON文件中的换行符
    let coursedata = JSON.parse(response?.data.res)
    console.log(coursedata);
    setCourseinfo(() => coursedata);
    setCoursestate(() => true);
  }

  async function extendCourse(part:string) {
    console.log(part, courseinfo[part],typeof(courseinfo[part]));
    
    const response = await axios
      .post("http://localhost:5000/prompt-extend", {
        part: part,
        content: courseinfo[part],
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(response);  

    setCourseinfo((prevCourseinfo:any) => ({
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
  };

  return <CourseContext.Provider value={contextValue} {...props} />;
};

export { useCourseContext, CourseProvider };
