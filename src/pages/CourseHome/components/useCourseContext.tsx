


export function useCourseContext(){
    return {
        tags: {
            concept: {
                tag: "input",
                caption: "请输入您的课程大概念",
                information: "测量树的高度",
            },
            grade: {
                tag: "option",
                caption: "请输入您所教授的年级",
                information: {
                    value: "一年级",
                    choice: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
                },
            },
            target: {
                tag: "input",
                caption: "请输入您的授课目标",
                information: "拓展孩子发散思维，让孩子一边发散思维一边学习数学知识",
            },
        },
        courseinfo: {},
        account: {},
        tagsinfo: [],
    }
}