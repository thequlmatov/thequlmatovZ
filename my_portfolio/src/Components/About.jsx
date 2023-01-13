import React from 'react';
import Me from '../img/myPhoto.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5 >Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container '>
        <div className="about__me">
          <div className="about__me-img">
            <img  src={Me} alt="Mening rasmim" />
          </div>
        </div>
        <div className="about__content">

          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Assalomu alaykum. Mening ismim <b>Zuhriddin</b>.Men 20 yoshdaman.O'zbekiston Milliy universiteti, Amaliy matematika fakulteti 2- bosqich talabasiman.Hozirda g`irt bekorchiman.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About