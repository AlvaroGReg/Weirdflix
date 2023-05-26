import React, { useEffect, useState } from "react"
import { Edit } from "./Edit"

export const Listado = ({listadoState, setListadoState}) => {

	//const [listadoState, setListadoState] = useState([])
	const [editSate, setEditState] = useState(0)

	useEffect(() => {
		
		getFilms()
	}, [])

	const getFilms = () => {
		let filmsList = JSON.parse(localStorage.getItem('pelis'))
		
		setListadoState(filmsList)
		return filmsList
	}

	const eraseFilm = (id) => {
		//Get films
		let filmsList = getFilms()
		//Filter
		let newFilmList = filmsList.filter(film => film.id !== parseInt(id))

		//Refresh List
		setListadoState(newFilmList)

		//Refresh localstorage
		
		localStorage.setItem('pelis', JSON.stringify(newFilmList))
		
	}

	return (
		<>
		{listadoState != null ? 
			listadoState.map(film => {
				return (
					<article className="peli-item" key={film.id}>
						<h3 className="title">{film.titulo}</h3>
						<p className="description">{film.descripcion}</p>
						<button className="edit" onClick={ () =>{ setEditState(film.id)}}>Editar</button>
						<button className="delete" onClick={ () => eraseFilm(film.id)}>Borrar</button>

						{/**Aparece formulario de edit*/}
						{editSate === film.id && (
							<Edit 
								film={film}
								getFilms={getFilms}
								setEditState={setEditState}
								setListadoState={setListadoState}/>
						)}
					</article>
				)
			}) :
			
				<h1>No hay peliculas para mostrar.</h1>
			}

		</>
	)
}
