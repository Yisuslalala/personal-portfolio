import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Home.css';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hola, mi nombre es Jesús Quiñones</h2>
        <div className='prompt'>
          <p>
            Ingeniero de software apasionado por crear y aprender.
          </p>
        
          <a href="https://www.linkedin.com/in/jes%C3%BAs-qui%C3%B1ones/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Yisuslalala">
          <GitHubIcon />
          </a> 
          <a href="https://twitter.com/Yisuslalala">
          <TwitterIcon />
          </a>
        </div>
      </div>
        <div className="skills">
         <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Frontend</h2>
              <span> 
                React.js, HTML, CSS, NPM, Responsive Design, BootStrap, 
                MaterialUI, Yarn, Styled Components 
              </span>
            </li>
            <li className='item'>
              <h2>Backend</h2>
              <span> 
                Node.js, RestAPI, Java Spring, Express.js, OracleDB, 
                SQLite, MySQL, MongoDB, SQLAlchemy, Flask, FastAPI, 
                Django, Laravel
              </span>
            </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              Javascript, Java, Python, Typescript, C, C++, Go, PHP
            </span>
        </li>
          <li className='item'>
            <h2>Technologies</h2>
            <span>
              Uvicorn, DigitalOcean, AWS, AI, Computer Vision, 
              Embebed Systems
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home