import styled from "styled-components";

import { NavBar } from "./components/NavBar";
import { HomeSection } from "./components/HomeSection";
import { Introduction } from "./components/Introduction";

export function LandPage() {
  return (
    <Container>
      <NavBar/>
      <HomeSection/>
      <Introduction/>
    </Container>
  );
}

const Container = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
`;

// const Introduction = styled.div`
//   width: 100%;

//   .intro {
//     padding: 5rem 8rem;
//     h1 {
//       font-size: 3rem;
//     }
//   }

//   .intro-1-text {
//     display: flex;
//     flex-direction: row;
//     align-items: center;

//     img {
//       width: 22rem;
//       margin: 5rem;
//     }

//     p {
//       wrap: no-wrap;
//       padding: 0 5rem;
//       font-size: 1.2rem;
//       line-height: 2.5rem;
//     }
//   }

//   .intro-2-text {
//     margin-top: 3rem;
//     position: relative;
//     img:nth-child(1) {
//         position: absolute;
//         width: 60rem;
//     }
//     img:nth-child(2) {
//         top: 10rem;
//         position: absolute;
//         width: 35rem;
//         right: 0;
//     }
//   }
// `;
