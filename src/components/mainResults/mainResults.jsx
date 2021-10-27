import React from 'react'
import { SearchContext } from '../../providers/search'
import ResultsCard from '../resultsCard/ResultsCard'
import './mainResults.css'

function MainResults() {
  const { search, userData } = React.useContext(SearchContext)
  return (
    <div className='main'>
      <div className='results-title'>
        <p>
          {search
            ? `Resultados para: ${search}`
            : `Nenhum resultado encontrado`}
        </p>
      </div>

      <div className='results'>
        {userData
          ? userData.data.items.map((data) => {
              return (
                <ResultsCard
                  key={data.id}
                  avatar_url={data.avatar_url}
                  login={data.login}
                  html_url={data.html_url}
                  score={Number(data.score).toFixed(2)}
                />
              )
            })
          : ''}
      </div>
      <div className='background-image'></div>
    </div>
  )
}

export default MainResults
