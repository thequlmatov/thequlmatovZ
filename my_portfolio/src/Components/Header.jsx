import React from 'react'
import Btn from './buttons/Btn'
import me from '../img/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Zuhriddin Qulmatov</h1>
        <h5 className='text-light'> Web Developer</h5>
        <Btn/>
        <HeaderSocials/>
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header