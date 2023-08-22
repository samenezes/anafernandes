import React from 'react'
import ReactDOM from 'react-dom/client'
import Cabecalho from './Componentes/Header/cabecalho'
import Rodape from './Componentes/Footer/rodape'
import Corpo from './Componentes/Main/corpo'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecalho />
    <Rodape />
    <Corpo />
  </React.StrictMode>,
)
