import React from 'react'
import './mainResults.css'
import ResultsCard from '../resultsCard/ResultsCard'
function MainResults() {
  return (
    <div className='main'>
      <div className='results-title'>
        <p>Resultados para: Paytime</p>
      </div>

      <div className='results'>
        <ResultsCard />
      </div>
      <div className='background-image'></div>
    </div>
  )
}

export default MainResults
