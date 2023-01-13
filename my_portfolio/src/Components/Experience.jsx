import React from 'react'
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experinece__frontend">
          <h3> Frontend Developer </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Html</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Bootstarp</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Sass</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Jquery</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>React Js </h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        <div className="experinece__backend"></div>
      </div>
    </section>
  )
}

export default Experience