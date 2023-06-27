const express = require("express");
const cors = require("cors");
const axios = require("axios");

const fs = require("fs");
const path = require("path");
// the file is used to record the token usage
const filePath = path.join("./", "token_record.txt");

const app = express();
app.use(cors());
app.use(express.json());

async function gptfetch(request) {
  console.log("request", request);
  //
  const Authorization = ``;
  try {
    let retPrompt = false;
    await axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo-0613",
          // model: "ada",
          messages: [{ role: "user", content: request }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Authorization,
          },
        }
      )
      .then((response) => {
        console.log("response", response);
        console.log("response status", response.status);
        console.log(
          "response content",
          response.data.choices[0].message.content
        );
        console.log("response tokens", response.data.usage.total_tokens);
        let record = `Input:` + response.data.usage.prompt_tokens + ` Output:` +response.data.usage.completion_tokens + `/n`;
        fs.appendFileSync(
          filePath,
          String(record),
          "utf-8"
        );
        retPrompt = response.data.choices[0].message.content;
        return response.data.choices[0].message.content;
      });
    return retPrompt;
  } catch (error) {
    console.error("error-catch", error);
    return false;
  }
}

app.post("/prompt-course", async (req, res) => {
  const tags = req.body;
  const concept = `课程大概念：` + tags.concept + `。`;
  const grade = `课程年级：` + tags.grade + "。";
  const target = "课程目标：" + tags.target + "。";
  const questions = "课程驱动性问题：" + tags.questions + "。";
  const request =
    `我是一名小学老师，请帮我设计一堂PBL课程，以下是我的信息。` +
    concept +
    grade +
    target +
    questions +
    `请返回装着markdown文本的json文件：{part1:课程导入,part2:教学目标,part3:教学方案,part4:教学步骤, part5:评估与展示}`;
  let content = await gptfetch(request);
  console.log("prompt-course data", content);
  if (content === false) {
    res.json({
      res: {
        status: 0,
        data: null,
      },
    });
  } else {
    res.json({
      res: {
        status: 1,
        data: content,
      },
    });
  }
});

app.get("/", (req, res) => {
  res.send("API Running");
});

app.post("/prompt-extend", async (req, res) => {
  const content = req.body.content;
  console.log(content);
  const request =
  `拓展以下内容并返回markdown格式的文本：` + content; 
  let data = await gptfetch(request);
  console.log("prompt-extend data", data);
  if (data === false) {
    res.json({
      res: {
        status: 0,
        data: null,
      },
    });
  } else {
    res.json({
      res: {
        status: 1,
        data: data,
      },
    });
  }
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
