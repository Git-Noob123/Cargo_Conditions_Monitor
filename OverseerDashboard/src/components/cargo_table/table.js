/* table.js    Justin Potter, Jerry Dong    Virginia Tech    September 22, 2022
 * This defines a table to hold the cargo data with a head and body
 * Modified November 23, 2022 to remove unused styling
 */

import React from "react"
import { TableContainer, Table} from "@mui/material"

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