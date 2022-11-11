import React from "react"
import { TableContainer, Table, Paper } from "@mui/material"

import CargoHead from "./head"
import CargoBody from "./body"

/**
 * Our Table component, a collection of header and body
 */
const CargoTable = () => {
	return (
		<TableContainer>
			<Table align="center" sx={{width:1500}}>
				<CargoHead/>
				<CargoBody/>
			</Table>
		</TableContainer>
	)
}

export default CargoTable