import React from 'react'
import "./index.scss"

const HeaderMenu = () => {
  return (
    <div className='headerMenu'>
      <img src="dnc.png" alt="Logo da DNC" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Novidades</li>
          <li>Feminino</li>
          <li>Masculino</li>
          <li>Atendimento</li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderMenu