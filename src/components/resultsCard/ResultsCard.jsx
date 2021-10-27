import React from 'react'
import './resultsCard.css'
function ResultsCard() {
  return (
    <div className='card'>
      <img src='' alt='' />
      <h2>João</h2>
      <a href='#' target='_blank' rel='noopener noreferrer'>
        http://www.github.com/jaouser
      </a>
      <span>Score: 1.00</span>
      <button className='ver-mais-button'>Ver mais</button>
    </div>
  )
}

export default ResultsCard
