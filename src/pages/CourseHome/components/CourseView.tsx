import { useCourseContext } from "../../../context/useCourseContext";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useEffect,useState } from "react";

export function CourseView() {
  //const { courseinfo, coursestate } = useCourseContext();
  //注意转义换行符 /n  -> //n
  const courseinfo = `{
    "part1": "## 课程导入与教学目标\\n\\n欢迎大家来到今天的PBL课程！今天我们要一起探究一颗大树的高度，并且通过不同的数学测量方法，来解决一个很酷的问题：如果大树倒了，会砸到我们的教学楼吗？\\n\\n本课程的教学目标：\\n1. 发散数学思维，培养学生发现 问题、提出问题和解决问题的能力；\\n2. 培养学生精确测量的能力；\\n3. 培养合作学习和团队合作的能力；\\n4. 学会运用数学知识回 答实际问题。",
    "part2": "## 教学方案和步骤\\n\\n### 步骤一：PBL项目介绍\\n\\n首先，我会向学生们介绍这个PBL项目的主题：通过测量树的高度 ，来解决大树倒了会不会砸到我们的教学楼的问题。在这个PBL项目中，我们会分成小组来合作完成任务。\\n\\n### 步骤二：合作学习\\n\\n为了培养合作学习和团队合作的能力，我们会将学生分成4个小组，每个小组4-5人。小组内可以商量并分工，但是每个组员必须参与到PBL项目的每个环节。\\n\\n### 步骤三：树的高度的测量\\n\\n在小组内，学生们可以自由讨论和想象如何测量一棵树的高度，并且通过比较不同的测量方法，来寻找最为精确的方法。\\n\\n### 步骤四：测量教学楼和树的距离\\n\\n学生们将根据他们所选定的测量方法，来测量教学楼和树的距离，并将这个距离纳入计算结果之中。\\n\\n### 步骤五：计算结果\\n\\n最后，学生们会组合他们测量过程中得到的数据，运用数学知识来计算公式，并回答下面那个酷酷的问题：如果大树倒了，会砸到我们的教学楼吗？\\n\\n### 步骤六：展示成果\\n\\n每个小组将分享他们选定的测量方法、测量结果以及解决这个问题的思路，展示我们的成果和想法。",
    "part3": "## 评估与展示\\n\\n在这个PBL项目中，我们将用以下方式来评估学生的学习成果：\\n\\n1. 学生提交的小组报告，包括每 个小组的测量方法、测量过程和计算结果等；\\n2. 评估学生在小组合作中的表现，包括沟通、协作和团队意识等；\\n3. 通过学生的口头展示和展示的成果，来评估他们理解和掌握了PBL项目所要求的知识和技能。\\n\\n我们相信，通过这个PBL项目的学习，学生们将更加充分地发挥他们的创造力和探究精神，培养他们的合作意识和团队合作精神，同时也深刻理解了数学知识的重要性和实际应用性。"}`;
  const course = JSON.parse(courseinfo);
  const [showButton, setShowButton] = useState();

  useEffect(() => {
    console.log(typeof courseinfo, JSON.parse(courseinfo));
  });
  return (
    <Container>
      {Object.keys(course).map((content, key) => {
        return (
          <div className="show-content">
            {<div><button>编辑</button><button>扩展</button></div>}
            <ReactMarkdown>{course[content]}</ReactMarkdown>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow: auto;

  .show-content {
    margin: 1rem;
    padding: 0 1rem;
  }

  .show-content:hover {
    background-color: #f5f5f5;
  }
`;
