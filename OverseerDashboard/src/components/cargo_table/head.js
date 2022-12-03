/* head.js    Justin Potter    Virginia Tech    October 10, 2022
 * This defines the entries in the cargo data table's head
 * Modified October 26, 2022 to add humidity threshold to table header
 */

import React from "react"
import { TableHead, TableRow, TableCell } from "@mui/material"

const CargoHead = () => {
	return (
		<TableHead>
			<TableRow>
				<TableCell>#</TableCell>
				<TableCell>ID</TableCell>
				<TableCell>Temperature</TableCell>
				<TableCell>Humidity</TableCell>
				<TableCell>Driver</TableCell>
				<TableCell>Notification</TableCell>
				<TableCell>Temp. Thresh. Low</TableCell>
				<TableCell>Temp. Thresh. High</TableCell>
				<TableCell>Humi. Thresh. Low</TableCell>
				<TableCell>Humi. Thresh. High</TableCell>
				<TableCell/>
				<TableCell/>
			</TableRow>
		</TableHead>
	)
}

export default CargoHead