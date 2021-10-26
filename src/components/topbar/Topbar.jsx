import React from 'react'
import './topbar.css'
function Topbar() {
  return (
    <div className='top'>
      <div className='top-logo'>
        <img
          src={Logotype}
          alt='Logo do The Git Search'
          width='78'
          height='36'
        />
      </div>

      <div className='search-bar'>
        <input id='campo-busca' type='text' placeholder='Pesquisar' />

        <button>
          <i className='fal fa-search search-icon'></i>
        </button>
      </div>
    </div>
  )
}

export default Topbar
