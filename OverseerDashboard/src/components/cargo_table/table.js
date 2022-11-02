import React from "react"
import { TableContainer, Table, Paper } from "@mui/material"

import CargoHead from "./head"
import CargoBody from "./body"

/**
 * Our Table component, a collection of header and body
 */
const CargoTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<CargoHead/>
				<CargoBody/>
			</Table>
		</TableContainer>
	)
}

export default CargoTable