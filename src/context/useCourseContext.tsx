import React, {
  FC,
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";
import axios from "axios";

interface CourseContextValue {
  tags: Tags;
  courseinfo: any;
  coursestate: boolean;
  fetchCourse: () => void;
  changeInfo: (value: any, key: string) => void;
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

const CourseProvider: FC<{ children: ReactElement[] }> = (props) => {
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
  async function fetchCourse() {
    setCoursestate(()=>false);
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
    console.log(response);
    setCourseinfo(response?.data.res);
    setCoursestate(()=>true);
  }

  function changeInfo(value: any, key: string) {
    //console.log(value);
    setTags((prevTagsInfo: any) => ({
      ...prevTagsInfo,
      [key as keyof typeof prevTagsInfo]: {
        ...prevTagsInfo[key as keyof typeof prevTagsInfo],
        information: value,
      },
    }));
    //console.log(tags);
  }

  const contextValue: CourseContextValue = {
    tags,
    courseinfo,
    coursestate,
    fetchCourse,
    changeInfo,
  };
  return <CourseContext.Provider value={contextValue} {...props} />;
};

export { useCourseContext, CourseProvider };
