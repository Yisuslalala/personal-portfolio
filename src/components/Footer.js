import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href="https://www.instagram.com/Yisuslalala">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/Yisuslalala">
            <TwitterIcon />
            </a>
            <a href="https://www.youtube.com/channel/UCZ3Q1amj-UR83oBNNwn7rkA">
            <YouTubeIcon />
            </a>
            <a href="https://www.linkedin.com/in/jes%C3%BAs-qui%C3%B1ones/">
            <LinkedInIcon />
            </a>
        </div>
        <p> &copy; 2023 yisuslalala.com</p>
        </div>
  )
}

export default Footer