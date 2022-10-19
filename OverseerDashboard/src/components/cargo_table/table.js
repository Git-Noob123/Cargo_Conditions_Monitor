import React from "react"
import { TableContainer, Table, Paper } from "@mui/material"

import CargoHead from "./head"
import CargoBody from "./body"

const TABLE_STYLE = {
	maxWidth:"75%"
}

/**
 * Our Table component, a collection of header and body
 */
const CargoTable = () => {
	return (
		<TableContainer component={Paper} sx={TABLE_STYLE}>
			<Table>
				<CargoHead/>
				<CargoBody/>
			</Table>
		</TableContainer>
	)
}

export default CargoTable