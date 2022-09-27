import React from "react"
import ReactDOM from "react-dom/client"
import axios from "axios"

import "./index.css"
import App from "./app.js"

const fetchURL = "http://localhost:5050/Api/Cargos"
const root = ReactDOM.createRoot(document.getElementById("root"))
const emptyData = [{ id:"tempdata", name:"tempdata", temperature:0, humidity:0, driver:"tempdata", notification:false }]
var data = emptyData

function tick() {
	axios.get(fetchURL)
		.then((response) => {
			data = response.data
		})
		.catch((error) => {
			console.log(error)
		})

	root.render(
		<React.StrictMode>
			<App data={data}/>
		</React.StrictMode>
	)
}

setInterval(tick, 5000)

/**
 * DATA FORMAT:
 *
 * id:int
 * name:string
 * temperature:float
 * humidity:float
 * driver:string
 * notification:bool
 */