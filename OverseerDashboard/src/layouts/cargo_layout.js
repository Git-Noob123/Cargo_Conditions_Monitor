import React from "react"

import CargoTable from "../components/cargo_table/table"
import Title from "./title"

/**
 * Layout level is a collection of components, each layout file is a part we see on webpage.
 * For example, in our CargoLayout file, a component is the table, while another component is "Welcome, Overseer!"
 */
// TODO (minor): Output username instead of just "Overseer"
const CargoLayout = () => {
	return (
		<div>
			<Title text="Cargo Containers" />
			<CargoTable/>
		</div>
	)
}

export default CargoLayout