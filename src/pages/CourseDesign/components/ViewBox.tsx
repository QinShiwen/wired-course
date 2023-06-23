import styled from "styled-components";
import { InfoView } from "./InfoView";
import { CourseView } from "./CourseView";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useCourseContext } from "../../../context/useCourseContext";

export function ViewBox() {
  const { courseStatus, paginationChange, courseHistory,nowCourseIndex } = useCourseContext();
  const [showPagination, setShowPagination] = useState(false);

  function handlePaginationChange(e: number) {
    paginationChange(e);
  }

  function handlePaginationShow(e: MouseEvent) {
    let mouseY = e.clientY;
    let windowH = window.innerHeight;
    if (mouseY >= windowH - 50) {
      setShowPagination(true);
    } else {
      setShowPagination(false);
    }
  }

  useEffect(() => {
    if (courseStatus === 2 && courseHistory.length > 1) {
      window.addEventListener("mousemove", handlePaginationShow);
    } else {
      window.removeEventListener("mousemove", handlePaginationShow);
    }
  });

  return (
    <Container>
      <InfoView />
      <CourseView />
      {courseStatus !== 1 && showPagination ? (
        <div className="pagination">
          <Pagination
            defaultCurrent={nowCourseIndex + 1}
            total={courseHistory.length * 10}
            onChange={(e) => handlePaginationChange(e)}
          />
        </div>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  .pagination {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px -4px 19px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(5px);
  }
`;
