import React from 'react';
import CV from '../../img/Qulmatov Zuhriddin Rezyume programmist.docx'

const Btn = () => {
  return (
    <div className='btns'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Btn