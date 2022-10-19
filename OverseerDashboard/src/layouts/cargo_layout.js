import React from "react"

import CargoTable from "../components/cargo_table/table"
import ThreshInput from "../components/thresh_input"

/**
 * Layout level is a collection of components, each layout file is a part we see on webpage.
 * For example, in our CargoLayout file, a component is the table, while another component is "Welcome, Overseer!"
 */
const CargoLayout = () => {
	return (
		<div className="container">
				<h1>Welcome, Overseer!</h1>

				<h2>Threshold Adjustment</h2>
				<ThreshInput/>

				<h2>Cargo Data</h2>
				<CargoTable/>
		</div>
	)
}

export default CargoLayout