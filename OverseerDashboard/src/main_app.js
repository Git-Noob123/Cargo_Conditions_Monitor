import React from "react"

import CargoLayout from "./layouts/cargo_layout.js"
import {
	Route,
	Routes,
  } from "react-router-dom";
import LoginForm from "./components/loginForm.js";

import NavBar from "./components/navBar.js";
/**
 * We do our routings here at this level, as well as global components, such as top nav bar
 * Routings will look like a state machine(doesn't really have to)
 */
const MainApp = () => {
	return (
		<>	
		<NavBar />
		<Routes>
			<Route path="/" element={<LoginForm />} />
			<Route path="/cargos" element={<CargoLayout />} />
			<Route path="/login" element={<LoginForm />} />
		</Routes>
		</>

	)
}

export default MainApp