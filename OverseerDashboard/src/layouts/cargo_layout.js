import React from "react"

import CargoTable from "../components/cargo_table/table"
import ThreshTable from "../components/thresh_table/table"

/**
 * Layout level is a collection of components, each layout file is a part we see on webpage.
 * For example, in our CargoLayout file, a component is the table, while another component is "Welcome, Overseer!"
 */
const CargoLayout = () => {
	return (
		<div className="container">
				<h1>Welcome, Overseer!</h1>

				<h2>Thresholds</h2>
				<ThreshTable/>

				<h2>Data</h2>
				<CargoTable/>
		</div>
	)
}

export default CargoLayout