const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

async function gptfetch(request) {
  console.log("request", request);

  const Authorization = ``;

  try {
    await axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: request }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Authorization,
          },
        }
      )
      .then((error) => {
        console.error("error", error.response.data);
        return false;
      })
      .then((response) => {
        console.log("response status", response.status);
        console.log("response", response.data.choices[0].message.content);
        return response.data.choices[0].message.content;
      });
  } catch (error) {
    console.error("error", error.response.data);
    return false;
  }
}

app.post("/prompt-course", async (req, res) => {
  console.log(req.body);
  const tags = req.body;
  const concept = `课程大概念：` + tags.concept + `。`;
  const grade = `课程年级：` + tags.grade + "。";
  const target = "课程目标：" + tags.target + "。";
  const questions = "课程驱动性问题：" + tags.questions + "。";
  const request =
    `我是一名小学老师，请帮我设计一堂PBL课程。以下是我的` +
    concept +
    grade +
    target +
    questions +
    `请返回装着markdown文本的json文件：{part1:课程导入,part2:教学目标,part3:教学方案,part4:教学步骤, part5:评估与展示}`;

  let data = await gptfetch(request);
  console.log("prompt-course data", data);
  res.json({ res: data });
});

app.get("/", (req, res) => {
  res.send("API Running");
});

app.post("/prompt-extend", async (req, res) => {
  const content = req.body.content;
  const part = req.body.part;
  console.log(part, content);
  const request =
    `请帮我扩展以下` + part + `并返回类似的markdown格式的文本：` + content;
  let data = await gptfetch(request);
  console.log("prompt-extend data", data);
  res.json({ res: data });
});


const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
