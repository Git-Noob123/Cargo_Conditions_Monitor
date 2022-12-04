/* index.js    Justin Potter    Virginia Tech    September 19, 2022
 * This is the root page of the overseer dashboard. It is the highest level in this web app's
 * hierarchy.
 * Modified October 5, 2022 to make data get fetched from the bottom to the top of the hierarchy
 */

import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import App from "./app.js"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
)