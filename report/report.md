# 基于 GPT 模型的备课平台

## 系统功能分析

## 备课系统

### 系统架构

- Course Design
  - StartForm: Guidance and help edit the tags
  - TagsBar: Edit the tags to change the course prompt result
    - TagBox: Single tag (Concept/grade/target/questions)
  - ViewBox
    - InfoView: Show the information of users
    - CourseView: Show the result of prompting
      - ToolBar: Change the font size, color etc.
      - ContentBox: Show the content of each part

### 系统数据模型

- 课程数据模型
```ts
{
    //当前展示的课程
    "presentcourse":{
        "version":1,   //第几个版本
        "content":{
            "part-1":1  //该部分的第几个版本
            "part-2":1
            ...
        }
    },
    //总体课程数据
    "coursedata":[{  //记录每一个版本
        //存放本次记录prompt的数据
        "prompt-data":{
            "concept":"",  //大概念
            "grade":"",  //年级
            "questions":""  //驱动性问题
        }
        //该prompt版本下的结果数据
        "course-content":{
            //用数组记录该部分的不同版本
            "part-1":[{   //课程导入
                "title":"",
                "content":""
            }],
            "part-2":[...], //教学目标
            "part-3":[...], //教学方案
            "part-4":[...], //教学步骤
            "part-5":[...]  //评估与展示
        }
    }]
}
```

- 页面数据模型

```ts

```

### Context 共享上下文

```ts
{
  slide: number;   //开始表单指导tags页数
  tags:[concept,grade,questions], //当前prompt的标签
  presentCourse:[], //当前展示的课程
  coursedatas:[],   //存储记录总的数据
  
  courseinfo: any;
  coursestate: string;
  fetchCourse: () => void;
  changeInfo: (value: any, key: string) => void;
  extendCourse: (content: string) => void;
  nextSlide: (slidenum: number) => any;
  setCourseinfo: (value: any) => void;
}
```

### 实现难点

#### 全局数据共享



#### 富文本编辑实现

- 初始数据格式为markdown，使用marked模块将markdwon格式内容转换为HTML；
```ts
testcourse[i] = marked.parse(testcourse[i])
```
- 使用 HTML 中 div 的 contentEdiable 属性：让 div 中的内容可编辑。并使用divRef指代该div元素，将HTML内容填充进去。
```react
<div className="editor" contentEditable="true" ref = {divRef} onMouseLeavet={handleChange} />
```
- 改变div元素中内容，可使用onMouseLeave方法（onChange无效）。通过把div内的innerHTML值交付出去后即可。
```ts
  function handleChange() {
    if(divRef.current){
      setNowcontent(divRef.current.innerHTML);
    }
    setCourseinfo((prevCourseinfo: any) => ({
      ...prevCourseinfo,
      [part]: nowcontent
    }));
  }
  useEffect(() => {
    if(divRef.current){
      divRef.current.innerHTML = nowcontent;
    }
  })
```
- 改变指令：加粗，斜体，字体大小与颜色
```

```
### 登录注册系统架构

### 社区系统架构