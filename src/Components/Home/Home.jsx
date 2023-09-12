import React from 'react'
import './home.css'

import HomeTitle from './Title/HomeTitle'

const Home = () => {
  return (
    <div id='home' className='w-screen h-screen flex flex-col items-center justify-center'>
      <HomeTitle />
    </div>
  )
}

export default Home
