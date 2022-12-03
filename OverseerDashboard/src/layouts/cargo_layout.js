/* cargo_layout.js    Justin Potter    Virginia Tech    September 22, 2022
 * This page defines the layout of the cargo containers data page. It contains a title and a cargo
 * table.
 * Modified November 12, 2022 to remove leftover whitespace and TODOs
 */

import React from "react"

import CargoTable from "../components/cargo_table/table"
import Title from "./title"

/**
 * Layout level is a collection of components, each layout file is a part we see on webpage.
 * For example, in our CargoLayout file, a component is the table, while another component is "Welcome, Overseer!"
 */
const CargoLayout = () => {
	return (
		<div>
			<Title text="Cargo Containers" />
			<CargoTable/>
		</div>
	)
}

export default CargoLayout