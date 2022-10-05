import React from "react"
import ReactDOM from "react-dom/client"

import App from "./app.js"
import "./index.css"
import CargoDataFetcher from "./controllers/cargo_data_fetcher.js"

const root = ReactDOM.createRoot(document.getElementById("root"))

function tick() {
	root.render(
		<React.StrictMode>
			<App data={CargoDataFetcher.data}/>
		</React.StrictMode>
	)
}

setInterval(tick, 1000) // TODO: Set back to 5000ms