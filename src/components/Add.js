import React, { useState } from 'react'
import { SaveStorage } from '../helpers/SaveStorage';

export const Add = ({setListadoState}) => {

	const componentTitle = "Añadir película"

	const [ filmState, setFilmState ]  = useState({
		titulo: '',
		descripcion: ''
	})

	const { titulo, descripcion } = filmState

	const getDataForm = e => {
		e.preventDefault()

		//Get forms data
		let target = e.target
		let titulo = target.filmTitle.value
		let descripcion = target.filmDescription.value

		//Create object of film to save
		let peli = {
			id: new Date().getTime(),
			titulo,
			descripcion
		}
		
		setFilmState(peli)
		setListadoState(elements => {
			return [...elements, peli]
		})
		//Save local storage

		SaveStorage('pelis', peli)
	}


  return (
	<div className="add">
		<h3 className="title">{componentTitle}</h3>

		{(titulo && descripcion) && "Has creado la película: " + titulo}
		<form onSubmit={ getDataForm }>
		<input
			type="text"
			placeholder="Título"
			name="filmTitle"
			id="filmTitle"
		/>
		<textarea
			name="filmDescription"
			placeholder="Descripción"
			id="filmDescription"
			cols="30"
			rows="10"
		></textarea>
		<input
			type="submit"
			id='save'
			value="Guardar"
		/>
		</form>
	</div>
  )
}
