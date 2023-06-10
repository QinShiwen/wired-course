//import { useCourseContext } from "../../context/useCourseContext";
import styled from "styled-components";
import { pagedata } from "./pagesdata";
import { StartPage } from "./components/StartPage";

export function StartForm() {
  
  return (
    <Container>
      {pagedata.map((pagedata:any, index:number) => {
        return (
          <StartPage
            key={index}
            slidenum={index}
            title={pagedata.title}
            input={pagedata.input}
            intro={pagedata.intro}
            img={pagedata.img}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 999;
  background-color: white;

  h1 {
  }

  .left-form {
    padding: 2rem;
    padding-top: 5rem;
    padding-left: 5rem;
    height: 100vh;
    width: 100vw;
  }

  .right-img {
    height: 100vh;
    margin-left: auto;
    margin-right: 0;
  }
`;
