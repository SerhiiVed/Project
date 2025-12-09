import React from 'react'
import '../styles/card.css'

const Card = () => {
  return (
    <div className='card'>
        {/* <img src="../../assets/image1.png" alt="Sumo Arnhem" /> */}
        <div className="img"></div>
        <div className="card_main-info">
          <p className='card_text'>Sumo Arnhem</p>
          <p className='description card_text'>Mexican Food</p>
        </div>
        <div className="card_add-info">
            <div className='card_add-info_box'>
              <p className='description card_text'>17</p>
              <p className='description card_text card_price'>13$</p>
            </div>
            <p className='card_text description card_rating'>4.5/5</p>
        </div>
    </div>
  )
}

export default Card