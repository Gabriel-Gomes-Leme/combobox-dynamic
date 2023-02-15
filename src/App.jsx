import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Form } from './components/Form'
import cadastroIngressantes from '../src/assets/react.svg'
import estados from './utils/estados.json'
import cidades from './utils/cidades.json'

function App() {
  const dataEstados = JSON.stringify(estados)
  const estadosJson = JSON.parse(dataEstados)
  const dataCidades = JSON.stringify(cidades)
  const cidadesJson = JSON.parse(dataCidades)
  return (
    <div className="App">
      <div className="main-box">
        <div className="main-box__thumb">
          <img src={cadastroIngressantes} alt="Cadastro de Ingressantes" title="Cadastro de Ingressantes" className='main-box__img'/>
        </div>
        <Form estados={estadosJson} cidades={cidadesJson}></Form>
      </div>
    </div>
  )
}

export default App
