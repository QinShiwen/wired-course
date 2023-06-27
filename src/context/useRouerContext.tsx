import { createContext, useContext, useState } from "react";
import { CourseDesign } from "../pages/CourseDesign/CourseDesign";
import { MyCourse } from "../pages/MyCourse/MyCourse";
import designIcon1 from "../assets/router/course-design-1.png";
import designIcon2 from "../assets/router/course-design-2.png";
import myIcon1 from "../assets/router/my-course-1.png";
import myIcon2 from "../assets/router/my-course-2.png";
import collectIcon1 from "../assets/router/course-collect-1.png";
import collectIcon2 from "../assets/router/course-collect-2.png";
import sourceIcon1 from "../assets/router/source-1.png";
import sourceIcon2 from "../assets/router/source-2.png";
import comIcon1 from "../assets/router/community-1.png";
import comIcon2 from "../assets/router/community-2.png";
import setIcon1 from "../assets/router/setting-1.png";
import setIcon2 from "../assets/router/setting-2.png";

export const routesInfo = [
  {
    name: "设计课程",
    path: "./",
    component: CourseDesign,
    icon1: designIcon1,
    icon2: designIcon2,
    active: true,
  },
  {
    name: "我的课程",
    path: "./my-course",
    component: MyCourse,
    icon1: myIcon1,
    icon2: myIcon2,
    active: false,
  },
  {
    name: "我收藏的课程",
    path: "./my-course",
    component: MyCourse,
    icon1: collectIcon1,
    icon2: collectIcon2,
    active: false,
  },
  {
    name: "资源",
    path: "./my-course",
    component: MyCourse,
    icon1: sourceIcon1,
    icon2: sourceIcon2,
    active: false,
  },
  {
    name: "社区",
    path: "./my-course",
    component: MyCourse,
    icon1: comIcon1,
    icon2: comIcon2,
    active: false,
  },
  {
    name: "设置",
    path: "./my-course",
    component: MyCourse,
    icon1: setIcon1,
    icon2: setIcon2,
    active: false,
  },
];

interface routerProps {
  name: string;
  path: string;
  component: any;
  icon1: any;
  icon2: any;
  active: boolean;
}

interface RouterContextValue {
  router: routerProps[];
  updateActive: (index: number) => void;
}

const RouterContext = createContext<RouterContextValue>(
  {} as RouterContextValue
);

const useRouterContext = () => {
  const context = useContext(RouterContext);
  return {
    ...context,
  };
};

const RouterProvider = (props: any) => {
  const [router, setRouter] = useState<routerProps[]>(routesInfo);

  // 更新路由激活状态
  function updateActive(index: number) {
    console.log(index);
    const newRouter = [...router];
    newRouter.forEach((item, i) => {
      if (i === index) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setRouter(newRouter);
  }

  const routerValue = {
    router,
    updateActive,
  };

  return <RouterContext.Provider value={routerValue} {...props} />;
};

export { RouterProvider, useRouterContext };
