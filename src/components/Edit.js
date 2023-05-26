import React from 'react'

export const Edit = ({film, getFilms, setEditState, setListadoState}) => {

	const compTitle = "Editar película"

	const saveEdit = (e, id) => {
		e.preventDefault()
		
		let target = e.target

		const savedFilms = getFilms()
		
		const index = savedFilms.findIndex(film => film.id === id)

		let editedFilm = {
			index,
			titulo: target.titulo.value,
			descripcion: target.descripcion.value
		}
		
		savedFilms[index] = editedFilm


		localStorage.setItem('pelis', JSON.stringify(savedFilms))

		setListadoState(savedFilms)
		setEditState(0)
	}
  return (
	<div className='edit_form'>
		<h3 className="title">{compTitle}</h3>
		<form onSubmit={ e => saveEdit(e, film.id)}>
			<input
			type='text'
			name='titulo'
			className='titulo_editado'
			defaultValue={film.titulo}/>

			<textarea
				name='descripcion'
				defaultValue={film.descripcion}
				className='descripcion_editada'/>
			<input
				type='submit'
				className='editar'
				value="Actualizar"/>
		</form>
	</div>
  )
}
