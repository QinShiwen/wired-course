import { TagBox } from "./TagBox";
import styled from "styled-components";
import { Space } from "antd";
import { useState } from "react";
import axios from "axios";

interface Tags{
    tag: string;
    caption: string;
    information: any;

}

interface TagsBarProps {
    tagsInfo: Tags[];
}

interface Forms{
    concept: Tags;
    grade: Tags;
    target: Tags; 
}

export function TagsBar() {

  const [tags, setTags] = useState({
    concept: {
      tag: "input",
      caption: "请输入您的课程大概念",
      information: "测量树的高度",
    },
    grade: {
      tag: "option",
      caption: "请输入您所教授的年级",
      information: {
        value: "一年级",
        choice: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
      },
    },
    target: {
      tag: "input",
      caption: "请输入您的授课目标",
      information: "拓展孩子发散思维，让孩子一边发散思维一边学习数学知识",
    },
  });

  function changeInfo(value: any,key: string) {
    console.log(value);
    setTags((prevTagsInfo:any) => ({
      ...prevTagsInfo,
      [key as keyof typeof prevTagsInfo]: {
        ...prevTagsInfo[key as keyof typeof prevTagsInfo],
        information: value,
      },
    }));
    console.log(tags);
  }

  async function fetchCourse(){
    const response = await axios.post("http://localhost:5000/prompt-course",{
      concept: tags.concept.information,
      grade: tags.grade.information.value,
      target: tags.target.information,
    })
    
    console.log(response);
  }

  return (
    <Container>
      <Space direction="vertical" size={30}>
      {Object.entries(tags).map(([key, tagInfo]) => (
          <TagBox
            key={key}
            tag={tagInfo.tag}
            caption={tagInfo.caption}
            information={tagInfo.information}
            changeInfo={(value) => changeInfo(value, key)}
          />
        ))}
      </Space>
      <div className="ready-prompt">
        <button onClick={fetchCourse}>生成课件</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 100vh;
  box-shadow: 5px 4px 25px rgba(0, 0, 0, 0.25);

  .ready-prompt {
    margin-top: 2rem;
  }

  button {
    width: 10rem;
    height: 2rem;
  }
`;
