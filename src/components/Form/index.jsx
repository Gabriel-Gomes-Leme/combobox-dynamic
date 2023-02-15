import React, { useEffect, useState } from 'react'
import './style.css'

export const Form = ({estados, cidades}) => {
    const [estadoId, setEstadoId] = useState()
    console.log(estadoId)
  return (
        <div className="form-box">
            <form className='form'>
            <div className="form__content">
                <label htmlFor="">Nome</label>
                <input type="text" className="form__field" />
            </div>
            <div className="form__content">
                <label htmlFor="">Curso</label>
                <select name="estado" id="" className="form__field">
                <option>Selecione o curso</option>
                    <option value="letras">Letras</option>
                    <option value="Matemática">Matemática</option>
                    <option value="Geografia">Geografia</option>
                </select>
            </div>
            <div className="form__content">
                <label htmlFor="estado">Estado</label>
                <select name="estado" id="" className="form__field" onChange={(e)=>setEstadoId(e.target.value)}>
                <option>Selecione o estado</option>
                    {estados.estado.map((estado)=>(
                        <option value={estado.id} key={estado.id}>{estado.name}</option>
                    ))}
                </select>
            </div>
            <div className="form__content">
                <label htmlFor="cidade">Cidade</label>
                <select name="cidade" id="" className="form__field">
                <option>Selecione a cidade</option>
                {cidades.cidade.map((city)=>(
                    estadoId == city.estado &&
                        <option value={city.name} key={city.id}>{city.name}</option>
                    ))}
                </select>
            </div>
            <div className="form__content">
                <button type="button" className="form__btn">
                    Cadastrar
                </button>
            </div>
        </form>
        </div>
  )
}
