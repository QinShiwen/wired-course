import { Link } from "react-router-dom";
import styled from "styled-components";
import { routesInfo } from "../../CourseHome";
import { useState } from "react";
import 'animate.css';

export function NavBar() {
  const [shownav, setShownav] = useState(true);

  return (
    <Container>
      <div className="pop-nav">
        <button onClick={() => setShownav(!shownav)}>pop</button>
      </div>
      {shownav ? (
        <div className="nav-bar">
          {routesInfo.map((route, index) => (
            <div key={index}>
              <Link to={route.path}>{route.name}</Link>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.div`
  .pop-nav {
    position: absolute;
    z-index: 100;
  }

  .nav-bar {
    z-index: 99;
    padding-top: 5rem;
    width: 13rem;
    height: 100vh;
    box-shadow: 5px 4px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
