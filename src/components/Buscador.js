import React, { useState } from "react"

export const Buscador = ({listadoState, setListadoState}) => {

	const [busquedaState, setBusquedaState] = useState('')
	const [noEncontradoState, setNoEncontradoState] = useState(false)

	const searchFilm = (e) => {
		//Create state and refresh
		setBusquedaState(e.target.value)

		//Filter
		let foundFilms = listadoState.filter( film => {
			return film.titulo.toLocaleLowerCase().includes(busquedaState.toLocaleLowerCase())
		})

		//Check results
		if (busquedaState.length <= 1 || foundFilms <= 0) {
			foundFilms = JSON.parse(localStorage.getItem('pelis'))

			setNoEncontradoState(false)
		}
		
		//Give value to localstorage
		setListadoState(foundFilms)

		//Refresh main list with filters


	}
	return (
		<div className="search">
			<h3 className="title">Buscador: {busquedaState}</h3>

			{(noEncontradoState === true && busquedaState.length) && (<span className="no-encontrado">No se ha encontrado ninguna coincidencia</span>)}
	
			<form action="">
				<input
					type="text"
					name="busqueda"
					id="search_field"
					autoComplete="off"
					onChange={ searchFilm }
				/>
				<button id="search">Buscar</button>
			</form>
		</div>
	)
}
