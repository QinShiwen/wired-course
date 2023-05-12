
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { CourseDesign } from './CourseDesign';
import { MyCourse } from './MyCourse';
import { NavBar } from './NavBar';

interface CourseHomeProps {

}

const routesInfo = [
    {
        path: "/course-design",
        component: CourseDesign,
    },
    {
        path: "/my-course",
        component: MyCourse,
    },
];

export function CourseHome(){
        return (
            <>
            <Router>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/course-design" element = {<CourseDesign/>} />
                    <Route path="/my-course" element = {<MyCourse/>} />
                </Routes>
            </Router>
            </>
        );
}