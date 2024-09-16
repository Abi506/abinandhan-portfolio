import React from 'react'
import './certification.css'

const Certifications = () => {
  return (
    <>
    <div className='d-flex certification-container'>
    <div className='front-end-skills'>
        <h1 className='certification-headings'>Front End</h1>
        <button className='btn btn-primary m-1'>HTML</button>
        <button className='btn btn-primary m-1'>CSS</button>
        <button className='btn btn-primary m-1'>Bootstrap</button>
        <button className='btn btn-primary m-1'>JavaScript</button>
        <button className='btn btn-primary m-1'>React</button>
    </div>
    <div className='back-end-skills'>
        <h1 className='certification-headings'>Back End</h1>
    <button className='btn btn-primary m-1'>Node.js</button>
    <button className='btn btn-primary m-1'>Express.js</button>
    <button className='btn btn-primary m-1'>MongoDB</button>
    <button className='btn btn-primary m-1'>SQL</button>
    <button className='btn btn-primary m-1'>RESTful APIs</button>
    </div>
    <div className='other-skills'>
        <h1 className='certification-headings'>Other Skills</h1>
    <button className='btn btn-primary m-1'>Git</button>
    <button className='btn btn-primary m-1'>GitHub</button>
    <button className='btn btn-primary m-1'>Responsive Design</button>
    </div>
    </div>
    </>
  )
}

export default Certifications
