# Introduction
A platform that support teachers to brainstorm their PBL course by AI.

# System Design
Made by React / TypeScript / Node.js / MongoDB

## Course Design
### Components
- Router Bar
- Course Design
  - TagsBar: Edit the tags to change the course prompt result
    - TagBox: props - tag("select/input"),
  - ViewBox
    - UserBox: Get the information of users
    - CourseBox: Show the result of prompting
- My Course

### Page Data Design
```js
{
    routers:[{
        name:string
        link:string
    }],
    pageData:{  //Each page has related page data
        tags:[{
            caption:string  // tell users the input
            tagtype:string  //select or input
            taginfo:any  //if it is select => ... ;if it is input, show text 
        }]
    }
}
```
### Logic steps
- Input filter tags
- Generate the course outline
- Edit the tags anytime

### Dependencies

## Backend and Database


# Development Process
1. 5.11 - Structure Design(data & page component)
2. 5.12 - Build course design framework


# Problem and Solution
## Moduale and Installation
1. styled-components - can't find module. But I have installed by using the order npm i @types/styled-components --save
2. 尝试读取TS obj元素，但是给我以下错误：元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型 "{ "1": Element; }"。
- Solution: 在 tagsType 对象的类型声明中，将索引类型由字符串改为 number，以匹配 tag 变量的类型。
```JS
const tagsType: { [key: number]: JSX.Element } = {
  "option": Option,
};
``` 