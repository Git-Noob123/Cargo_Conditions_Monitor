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
				<TableCell>Temp. Thresh Low</TableCell>
				<TableCell>Temp. Thresh High</TableCell>
				<TableCell/>
				<TableCell/>
			</TableRow>
		</TableHead>
	)
}

export default CargoHead