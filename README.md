# Introduction
A platform that support teachers to brainstorm their PBL course by AI.

# System Design
Made by React / TypeScript / Node.js / MongoDB

## Course Design
### Components
- Router Bar
- Course Design
  - TagsBar: Edit the tags to change the course prompt result
    - TagBox
  - InfoBox
    - UserBox: Get the information of users
    - ViewBox: Show the result of prompting
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
