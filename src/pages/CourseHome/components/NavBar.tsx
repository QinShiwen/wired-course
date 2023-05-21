

import { Link } from "react-router-dom";
import styled from "styled-components";
import { routesInfo } from "../../CourseHome";

export function NavBar() {
  return (
    <Container>
      {routesInfo.map((route,index) => (
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