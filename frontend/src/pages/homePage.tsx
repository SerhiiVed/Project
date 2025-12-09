import React from 'react'
import '../styles/homePage.css'
import Card from './card'

const HomePage = () => {
  return (
    <div className='container'>
        <h1 className='title'>TITLE</h1>
        <div className="inputs">

        </div>
        <div className="list">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default HomePage