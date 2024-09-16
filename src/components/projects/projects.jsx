import React from 'react';

import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import './projects.css';

const data = [
  {
    src: "https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726466456/Screenshot_392_rd38gu.png",
    alt: "Book Hub",
    heading: "Book Hub",
    description: "Book Hub is a responsive React app for book lovers to explore and discover new reads. It offers a seamless experience with features like login, a home page carousel, bookshelves, search with filters, and detailed book pages. Users can easily browse and find their next favorite book. The project emphasizes an intuitive, user-friendly interface.",
    github: "https://github.com/Abi506/BookHub",
    liveLink: "https://bookhubbyabi.ccbp.tech/"
  },
  {
    src: "https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726466455/Screenshot_390_xwgoff.png",
    alt: "Digital Pulse Marketing",
    heading: "Digital Pulse Marketing",
    description: "Digital Pulse Marketing is a responsive digital marketing website offering services such as SEO, content marketing, and social media marketing. It features a blog page providing in-depth insights into various digital marketing strategies and trends. Users can explore detailed information on boosting online presence and connect through a contact section for personalized services. Built using React.js, Node.js, and SQLite, the site ensures a seamless user experience.",
    github: "https://github.com/Abi506/digital-marketting-front-end",
    liveLink: "https://digital-marketting-front-end.vercel.app/"
  },
  {
    src: "https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726466455/Screenshot_391_flkbw7.png",
    alt: "Quotopia",
    heading: "Quotopia",
    description: "Quotopia is a quotes-sharing platform where users can discover, share, and contribute their own quotes. It allows users to update and delete their submitted quotes for a personalized experience. Built with React.js, Node.js, and SQLite, the platform emphasizes user engagement and inspiration through a vast collection of motivational quotes. Users can easily browse and manage quotes while enjoying a seamless experience.",
    github: "https://github.com/Abi506/quotes-front-end-completed",
    liveLink: "https://quotes-front-end-completed.vercel.app/login"
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <h1 className='project-main-heading' id='project'>Projects</h1>
      <div className='project-parent-card-container'>
        {data.map((eachProject, index) => (
          <div key={index} className='project-card-container shadow-lg'>
            <div className='project-image-container'>
              <img src={eachProject.src} alt={eachProject.alt} className='project-image' />
            </div>
            <div className='project-description-container'>
              <h1 className='project-heading'>{eachProject.heading}</h1>
              <p className='project-description'>{eachProject.description}</p>
            </div>
            <div className='project-links-container'>
              <button 
                type='button' 
                className='github-styles-button'
                onClick={() => window.open(eachProject.github, "_blank")}>
                Github <FaGithub className='mb-1'/> 
              </button>
              <button 
                type='button' 
                className='link-styles-button'
                onClick={() => window.open(eachProject.liveLink, "_blank")}>
                Live Link <CiLink className='project-link-icon'/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
