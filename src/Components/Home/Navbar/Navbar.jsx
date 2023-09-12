import React from 'react'
import logo from '/Assets/favicon.svg'

const Navbar = () => {
  return (
    <div className='w-screen px-5 py-5 flex justify-between fixed'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a href="https://github.com/NihhZaeyy" target='_blank'>
            <i className='bx bxl-github text-[40px] text-color4'></i>
        </a>
      </div>
    </div>
  )
}

export default Navbar
