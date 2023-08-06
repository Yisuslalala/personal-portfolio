import React from 'react'
import {useParams} from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css"


function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    const url = ProjectList[id].url;
    console.log(url);

    const handleClick = () => {
      window.location.href = url;
    };


  return (
      <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt=""/>
        <p>
            <b>Skills: </b>
            {project.skills}
        </p>
        <button className="repoLink" onClick={handleClick}>
        <GithubIcon />
        </button>
        <h1>{url}</h1>
      </div>
  )
  
}

export default ProjectDisplay