# Introduction
A platform that support teachers to brainstorm their PBL course by AI.
"homepage": "http://www.qinsw666.top/wired-course/",

# System Design
Made by React / TypeScript / Node.js / MySQL

## Course Design
### Components
- Router Bar
- Course Design
  - TagsBar: Edit the tags to change the course prompt result
    - TagBox: Single tag (Concept/grade/target/questions)
  - ViewBox
    - UserBox: Get the information of users
    - CourseBox: Show the result of prompting
- My Course
- Start From: get the information that teacher input at the begining 
  - From
    - Title
    - Input
    - Introduction
    - Next
  - Image
```js
[

]
```
### Page Data Design
```js
{
    routers:[{
        name:string
        link:string
    }],
    pageData:{  //Each page has related page data
        tags:[{
            caption:string,  // tell users the input
            information:string
        }...],
        courseinfo:{  //or null
          part1...
          part2...
        }
    }
}
```
### Logic steps
- Input filter tags
- Generate the course outline
- Edit the tags anytime

### Course data
```JS
//部分划分
{
  part1:"",   //课程导入
  part2:"",   //...
  part3:"",
  part4:"",
}
```

### Dependencies

## Backend and Database


# Development Process
1. 5.11 - Structure Design(data & page component). 
2. 5.12 - Build course design framework.
3. 5.16 - Prompting LLM model to get the data. 
4. 5.17 - Learn & Create useContext to store the shared information such as course data and tags. 
5. 5.18 - Make the data show with markdown effect. 
6. 5.19 - Css调整
7. 5.20&21 - 为生成结果划分6个区域
8. 5.22 - 实现为每一个区域的生成结果实现拓展功能
9. 5.23 - 编辑每一个部分的内容
10. 5.24 - 实现导航栏伸缩(style keyframe实现)+拓展效果
11. 5.27 逻辑图+UI小改
12. 5.28 UI修改-TagsBar弹窗+课程展示Ui

# Problem and Solution
## Moduale and Installation
1. styled-components - can't find module. But I have installed by using the order npm i @types/styled-components --save
- Solution: React版本升级导致不兼容styled-components。
2. 尝试读取TS obj元素，但是给我以下错误：元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型 "{ "1": Element; }"。
- Solution: 在 tagsType 对象的类型声明中，将索引类型由字符串改为 number，以匹配 tag 变量的类型。
```JS
const tagsType: { [key: number]: JSX.Element } = {
  "option": Option,
};
``` 
3. 调用gpt-3.5-turbo接口回复速度慢问题。
4. Backend error:
 - 一分钟之内只能请求3次gpt-turbo