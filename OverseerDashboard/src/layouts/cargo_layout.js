import React from "react"

import Table from "../components/cargo_table/table.js"

/**
 * Layout level is a collection of components, each layout file is a part we see on webpage.
 * For example, in our CargoLayout file, a component is the table, while another component is "Welcome, Overseer!"
 */
const CargoLayout = () => {
	return (
		<div className="container">
				<h1>Welcome, Overseer!</h1>
				<Table/>
		</div>
	)
}

export default CargoLayout;