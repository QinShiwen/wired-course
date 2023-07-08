# 基于 GPT 模型的备课平台
Logic flow:
landing page -> guidance -> design course

## 系统功能分析
### 路由数据模型
```ts
[
  {
    name: "设计课程",
    path: "./",
    component: CourseDesign,
    icon1: designIcon1,
    icon2: designIcon2,
    active: true,
  },
  ...
]
```

## 备课系统
### 系统架构

- Course Design
  - StartForm: Guidance and help edit the tags
    ```tsx
    //每一页负责一个Tag
    //若没有输入则会弹出弹窗提示
    ```
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
    "presentcourse":1   //present version
    // All version data store
    "coursedata":[{  // Record each version
        // Prompt data store
        "prompt-data":{
            "concept":"",  // main concept
            "grade":"",  // grade
            "target":"", // target 
            "questions":""  // driven question
        }
        // Course data store
        "course-content":{
            "part-1":""   // Course guideline
            "part-2":"", // Teaching target
            "part-3":"", // Teaching method
            "part-4":"", // Teaching step
            "part-5":""  // Evaluation and presentation
        }
    }]
}
```

- 页面数据模型
```ts
{
    navbar:{} //导航栏
    userinfo:{}  //用户信息
    tags:{}
    show: courseinfo | error | progress
}
```

### Context 共享上下文容器
```ts
{
  slide: number;   //开始表单指导tags页数
  promptData: {concept,grade,questions}, //当前prompt的标签
  nowCourseIndex: number;	//当前展示的课程下标
  nowCourseContent: any;	 //当前课件信息 	
  courseStatus: number;		 //当前状态：备课中1、成功2、失败0
  courseHistory:[{   //存储记录总的数据
      prompt-data:{}
      coursecontent:{}         
  }],   
  nextSlide: (slidenum: number) => void;	//下一页控制
  setNowCourseContent: (value: any) => void;	//更新当前课件信息
  updatePromptData: (value: any, key: string) => void;	 //修改标签信息
  fetchCourse: () => void;	//获取课程  
  extendCourse: (part: string) => void;		//扩展某一部分的信息
  handleStyleCommand: (command: string) => void;	//课件样式
  paginationChange: (page: number) => void;		//翻页控制
  setCourseStatus: (status: number) => void;	 //更新当前状态：备课中1、成功2、失败0
}
```
### 主要函数功能逻辑
1. fetchCourse 获取课程
  - 将状态设置为loading；
  - 整理Promptdata传给后端；
  - 后端工作流：
    - 封装请求数据；
    - 请求gpt API；
    - 判断请求返回结果：若成功则封装数据传给前端；若失败则返回失败信息；
  - 若返回数据status为1->状态设为成功；否则状态设为失败；
  - 更新课件与课件历史记录：
    - 把最新生成的课件push到courseHistory中
    - nowCourseIndex+1
    - 将当前课件设置为返回的数据

2. extendCourse 拓展课程
  - 拓展组件状态设置为loading
  - 
3. paginationChange 翻页控制
  - 点击第n页
  - 
  - 注意：ContentBox的富文本编辑器对应ref的innerHTML是自身组件下的state元素nowcontent，在翻页变更内容后，要使用set的元素对nowcontent进行更新再重新赋值给ref才会发生变化。

4. 更新富文本编辑后的内容

每一次修改tags与课件时都会同时修改历史记录的信息
### 实现难点

#### 全局数据共享

使用useContext实现全局上下文。

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
```ts
  function handleStyleCommand(command: string) {
    if (command.includes('color') || command.includes('backcolor') || command.includes('forecolor')) {
      let result = command.split('|')
      document.execCommand(result[0], false, result[1]);
    }
    if (command === 'h1' || command === 'h2' || command === 'p') {
      document.execCommand('formatBlock', false, command);
    }
    else{
      document.execCommand(command, false, "null");
    }
  }
```


#### 课件历史记录

专门使用一个数组存储课件的历史，包含prompt数据与当前课件等。

```ts

```



### 问题与解决方案
#### 课程设计系统
1. 嵌套路由

2. 部署路由跳转问题
####

但奇怪的是我并没有在组件中或是外面使用hooks



## 登录注册系统架构

## 社区系统架构
