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
            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <LinkedInIcon />
        </div>
        <p> &copy; 2023 yisuslalala.com</p>
        </div>
  )
}

export default Footer