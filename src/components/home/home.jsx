import React from 'react'
import {Container} from 'react-bootstrap'
import { Cursor, Typewriter } from 'react-simple-typewriter'
import abinandhanResume from '../../assets/resume.pdf';
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { UilMouseAlt } from '@iconscout/react-unicons';
import { MdOutlineFileDownload } from "react-icons/md";
import Certifications from '../certifications/certifications';
import CertificateCarousel from '../carousel/carousel';
import Projects from '../projects/projects';
import Mail from '../mail/mail';

import './home.css'

const Home = () => {

    const typeWriterProps={
        words:["Web Developer"],
        typeSpeed:80,
        loop:0,
        cursor:true,
        cursorStyle:"|"
    }

    const handleHireMe=()=>{
        window.open("https://www.linkedin.com/in/abi-nandhan-46a067248", "_blank");
    }

    const handleLinkedin=()=>{
        window.open("https://www.linkedin.com/in/abi-nandhan-46a067248", "_blank");
    }

    const handleGithub=()=>{
        window.open("https://github.com/Abi506", "_blank");
    }
    

  return (
    <Container>
    <div className='home-section' id="home">
    <div className='home-about-me'>
      <p className='home-name'>ABI NANDHAN A A</p>
      <div>
        <h1>I'm {" "}
        <span className='home-profession'>
        <Typewriter {...typeWriterProps}/>
        </span>
        </h1>
      </div>
      <p className='profession-description'>
      Passionate fullstack developer skilled in crafting visually captivating and intuitive websites, dedicated to delivering seamless user experiences that elevate brands and engage audiences          
      </p>
      <div className='d-flex'>
      <button type='button' onClick={handleHireMe} className='hire-me-button'>Hire Me</button>
      <a href={abinandhanResume} download="resume.pdf">
      <button className='download-Resume' type='button'>Download Resume <IoDocumentTextOutline/></button> 
      </a>
      </div>
      <div className='social-media-section'>
      <FaLinkedin className='linked-in-styles' onClick={handleLinkedin}/>
      <FaGithub className='github-styles' onClick={handleGithub}/>
      </div>
    </div>
    <div className='home-photo-section'>
        <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726453421/Screenshot__2___1_-removebg-preview_uwid8g.png" className='home-photo'/>
    </div>
     </div>
     <a href='#about' id="about" className='scroll-btn scroll-button-parent'>
     <button type='button' className='scroll-button'> <UilMouseAlt className="mouse-icon"/> {" "}Scroll Down</button>
     </a>
     <div className='about-section'>
        <h1 className='about-heading'>About Me</h1>
        <p className='about-me-description'>Meet Abi Nandhan A A, a dedicated Full Stack Developer with expertise in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and SQL. Abi excels in crafting responsive interfaces, implementing secure authentication systems, and optimizing user experiences. With a strong commitment to enhancing project efficiency and delivering high-quality solutions, Abi is always eager to tackle new challenges. Connect with him on LinkedIn to explore exciting opportunities and collaborations!</p>
        <div>
        <a href={abinandhanResume} download="resume.pdf">
      <button className='about-download-Resume btn btn-primary' type='button'>Download Resume <MdOutlineFileDownload/></button> 
      </a>
        </div>
     </div>
     <div className='certifications-section'>
        <Certifications/>
        <CertificateCarousel/>
     </div>
     <div className='project-section'>
        <Projects/>
     </div>
     <Mail/>
    </Container>
  )
}

export default Home
