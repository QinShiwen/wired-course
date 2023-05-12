
//import './App.css';
import { CourseHome } from './pages/CourseHome/CourseHome';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    console.log(styled)
  })  
  return (
    <div className="App">
      <CourseHome/>
    </div>
  );
}



