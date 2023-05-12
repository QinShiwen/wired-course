

import { Link } from "react-router-dom";

const routes = [
  {
    path: "/course-design",
    name: "设计课程",
  },
  {
    path: "/my-course",
    name: "我的课程",
  },
];

export function NavBar() {
  return (
    <div>
      {routes.map((route,index) => (
        <div key = {index}>
            <Link to={route.path}>{route.name}</Link>
        </div>
        )
      )}
    </div>
  );
}

