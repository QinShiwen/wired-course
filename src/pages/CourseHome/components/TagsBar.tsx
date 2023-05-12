import { TagBox } from "./TagBox";
import styled from "styled-components";
import { Space } from "antd";

const tagsInfo = [
  {
    tag: "input",
    caption: "请输入您的课程大概念",
    information: "测量树的高度",
  },
  {
    tag: "option",
    caption: "请输入您所教授的年级",
    information: {
      value: "一年级",
      choice: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
    },
  },
  {
    tag: "input",
    caption: "请输入您的授课目标",
    information: "拓展孩子发散思维，让孩子一边发散思维一边学习数学知识",
  },
];

export function TagsBar() {
  function changeInfo() {
    console.log("changeInfo");
  }

  return (
    <Container>
      <Space direction="vertical" size={30}>
        {tagsInfo.map((tagInfo, index) => (
          <TagBox
            key={index}
            tag={tagInfo.tag}
            caption={tagInfo.caption}
            information={tagInfo.information}
            changeInfo={changeInfo}
          />
        ))}
      </Space>
      <div className="ready-prompt">
        <button>生成课件</button>
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
