import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { routesInfo } from "../../CourseHome";
import { useState } from "react";
import "animate.css";

export function NavBar() {
  return (
    <Container>
      {routesInfo.map((route, index) => (
        <div key={index}>
          <Link to={route.path}>{route.name}</Link>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  z-index: 99;
  padding-top: 5rem;
  height: 100vh;
  box-shadow: 5px 4px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
