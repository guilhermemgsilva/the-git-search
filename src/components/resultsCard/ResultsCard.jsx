import React from 'react'
import { SearchContext } from '../../providers/search'
import './resultsCard.css'
function ResultsCard({ login, html_url, score, avatar_url }) {
  return (
    <div className='card'>
      <img src={avatar_url} alt='' />
      <h2>{login}</h2>
      <a href={html_url} target='_blank' rel='noopener noreferrer'>
        {html_url}
      </a>
      <span>Score: {score}</span>
      <button className='ver-mais-button'>Ver mais</button>
    </div>
  )
}

export default ResultsCard
