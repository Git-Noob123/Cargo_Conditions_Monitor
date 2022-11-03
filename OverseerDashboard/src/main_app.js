import React from "react"

import CargoLayout from "./layouts/cargo_layout.js"
import {Route, Routes} from "react-router-dom";
import { useState, createContext, useMemo } from "react";
import NavBar from "./components/nav_bar.js";
import LoginLayout from "./layouts/login_layout.js";
import ApplianceLayout from "./layouts/appliance_layout.js";
/**
 * We do our routings here at this level, as well as global components, such as top nav bar
 * Routings will look like a state machine(doesn't really have to)
 */
export const LoginContext = createContext(null);
const MainApp = () => {

  	const [currUser, setCurrUser] = useState("");
  	const [loggedIn, setLoggedIn] = useState(false);

	return (
	<>	
	<LoginContext.Provider
      value={
		useMemo(() => ({ currUser, loggedIn, setCurrUser, setLoggedIn }), [
			currUser, loggedIn, setCurrUser, setLoggedIn
		  ])}
    >
		<NavBar />
		<Routes>
			<Route path="/" element={<LoginLayout />} />
			<Route path="/cargos" element={<CargoLayout />} />
			<Route path="/appliances" element={<ApplianceLayout />} />
			<Route path="/login" element={<LoginLayout />} />
		</Routes>
    </LoginContext.Provider>
	</>

	)
}

export default MainApp