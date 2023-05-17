const express = require("express");
const axios = require("axios");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

async function gptfetch(request) {
  console.log("request", request);

  const Authorization = ``;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: request  }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Authorization,
      },
    }
  );
  console.log("response", response.data.choices[0].message.content);
  return response.data.choices[0].message.content;
}

app.get("/", (req, res) => {
  res.send("API Running");
});

app.post("/prompt-course", async(req, res) => {
  //console.log(req.body)
  const tags = req.body;
  const guidewords =
    "PBL教学法的核心思想是通过引入实际生活中的问题和挑战，让学生在实践中探索和解决问题，并在此过程中获取知识和技能，提升学生思辨思维。教师的角色变为指导者和辅导者，鼓励学生积极参与学习过程，帮助学生制定解决问题的计划和策略，提供必要的资源和支持，促进学生之间的合作和讨论。在PBL教学法中，驱动性问题具有挑战性又贴近生活，学生需要主动探索，得到自己的答案，而不是老师简单地传授知识。请帮我设计一个PBL课程，以下是我的要求：";
  const concept = "课程大概念：" + tags.concept+"。";
  const grade = "课程年级：" + tags.grade+"。";
  const target = "课程目标：" + tags.target+"。";
  const questions = "课程驱动性问题：" + tags.questions+"。";
  const request = guidewords + concept + grade + target + questions + "  请给出Markdown格式的课程大纲。";
  let data = await gptfetch(request);
  console.log("data",data);
  res.json({res:data});
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
