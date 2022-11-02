import React from "react"
import { BrowserRouter } from "react-router-dom"

import MainApp from "./main_app.js"

/**
 * This level is for global stylings and some general settings, such as queryClientProvider
 * 
 */
const App = () => {
	return (
		<BrowserRouter>
			<MainApp/>
		</BrowserRouter>
	)
}

export default App