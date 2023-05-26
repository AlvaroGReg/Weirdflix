import { Listado } from "./components/Listado";
import {Buscador} from './components/Buscador';
import { Add } from "./components/Add";
import { useState } from "react";

function App() {

	const [listadoState, setListadoState] = useState([])

  return (

		<div className="layout">
			{/*HEADER*/}
			<header>
				<div className="logo">
					<div className="play"></div>
				</div> 
				<h1>MisPelis</h1>
			</header>
			{/*NAV*/}
			<nav>
				<ul>
					<li><a href="/#">Inicio</a></li>
					<li><a href="/#">Películas</a></li>
					<li><a href="/#">Blog</a></li>
					<li><a href="/#">Contacto</a></li>
				</ul>
			</nav>

			{/* MAIN CONTENT */}
			<section className="content">
				<Listado listadoState={listadoState} setListadoState={setListadoState}/>
			</section>
			{/* LATERAL BAR */}
			<aside className="lateral">
				<Buscador listadoState={listadoState} setListadoState={setListadoState}/>
				{/* ADD FILM */}
				<Add setListadoState={setListadoState}/>
			</aside>
			{/* FOOTER */}
			<footer>&copy; Máster en Js ES12 y TS</footer>
		</div>
  );
}

export default App;
