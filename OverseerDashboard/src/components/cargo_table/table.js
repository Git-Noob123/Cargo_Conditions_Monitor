import React from "react"

import CargoHead from "./head.js"
import CargoBody from "./body.js"

/**
 * Our Table component, a collection of header and body
 */
const CargoTable = () => {
	return (
		<table>
			<CargoHead/>
			<CargoBody/>
		</table>
	)
}

export default CargoTable