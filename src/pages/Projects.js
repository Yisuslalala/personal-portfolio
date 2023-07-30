import React from 'react'
import ProjectItem from '../components/ProjectItem'
import employeeSystem from "../assets/employeeSystem.png";
import bookCollection from "../assets/bookCollection.png";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className='projects'>
      <h1> Mis proyectos personales </h1>
      <div className="projectList">
        <ProjectItem name="Sistema de empleados" image={employeeSystem} />
        <ProjectItem name="Sistema de libros" image={bookCollection} />
      </div>
    </div>
  )
}

export default Projects