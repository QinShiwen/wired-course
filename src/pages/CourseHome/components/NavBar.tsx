

import { Link } from "react-router-dom";
import styled from "styled-components";

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
    <Container>
      {routes.map((route,index) => (
        <div key = {index}>
            <Link to={route.path}>{route.name}</Link>
        </div>
        )
      )}
    </Container>
  );
}

const Container = styled.div`
  width:15rem;
  height:100vh;
  box-shadow: 5px 4px 25px rgba(0, 0, 0, 0.25);
`;