/* app.js    Justin Potter    Virginia Tech    September 19, 2022
 * This contains the main web application with a router to route the user to different pages.
 * Modified November 12, 2022 to remove leftover whitespace and TODOs
 */

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