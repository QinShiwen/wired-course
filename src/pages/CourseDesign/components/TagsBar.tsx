import { TagBox } from "./TagBox";
import styled, { keyframes } from "styled-components";
import { Space } from "antd";
import { useCourseContext } from "../../../context/useCourseContext";
import { useEffect, useState } from "react";
import { notification } from "antd";
import PopImg from "../../../assets/input-pop.png";
export function TagsBar() {
  const { promptData, courseStatus, fetchCourse, updatePromptData } =
    useCourseContext();
  const [api, contextHolder] = notification.useNotification({
    placement: "top",
    top: 100,
  });
  function handleTagsButtonClick() {
    let vacancy = Object.entries(promptData).some(
      ([key, data]) => data.length > 0
    );
    if (!vacancy) {
      api.open({
        message: null,
        duration: 10000000,
        description: <img src={PopImg} alt="popimg" width={200} />,
        placement: "top",
      });
    } else {
      fetchCourse();
    }
  }

  useEffect(() => {});

  const caption = [
    "请输入您的课程大概念",
    "请输入您的课程年级",
    "请输入您的授课目标",
    "请输入您的驱动性问题",
  ];

  return (
    <Container>
      {contextHolder}
      <Space direction="vertical" size={30}>
        {promptData &&
          Object.entries(promptData).map(([key, data], index) => (
            <TagBox
              key={index}
              tagnum={key}
              caption={caption[index]}
              information={data}
              changeInfo={(value) => updatePromptData(value, key)}
            />
          ))}
      </Space>
      <div className="ready-prompt">
        {courseStatus === 1 ? (
          <button className="stop-button">课件生成中</button>
        ) : (
          <button className="prompt-button" onClick={handleTagsButtonClick}>
            生成课件
          </button>
        )}
      </div>
    </Container>
  );
}

const navbarfadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  // border-radius: 0 20px 20px 0;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  box-shadow: 5px 4px 25px rgba(0, 0, 0, 0.25);
  animation: 0.2s ease-in-out 0s 1 normal forwards running ${navbarfadeIn};
  .ready-prompt {
    margin-top: 2rem;
  }

  textarea {
    caret-color: #6396f6;
  }

  .prompt-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 150px;
    height: 48px;
    justify-content: center;
    border: none;
    background: #6396f7;
    box-shadow: 0px 20px 50px rgba(46, 46, 46, 0.05);
    border-radius: 47px;
    color: #ffffff;
    cursor: pointer;
  }

  .stop-button {
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 150px;
    height: 48px;
    justify-content: center;
    border: none;
    background: grey;
    color: #ffffff;
    box-shadow: 0px 20px 50px rgba(46, 46, 46, 0.05);
    border-radius: 47px;
    cursor: not-allowed;
  }
`;
