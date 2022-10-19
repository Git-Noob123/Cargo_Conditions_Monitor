import React, { useState } from "react"
import axios from "axios"
import { TableContainer, Table, TableBody, TableCell, TableRow, TextField, Button, Paper } from "@mui/material"

import DatabaseURL from "./db_url"

const TABLE_STYLE = {
	maxWidth:"50%"
}

// TODO: Clear input after submission
const ThreshInput = () => {
	const [id, setID] = useState("")
	const [tempLo, setTempLo] = useState(0)
	const [tempHi, setTempHi] = useState(0)

	// Event handlers
	const handleSubmit = () => {
		let data = {
			"id":id,
			"tempThreshLow":tempLo,
			"tempThreshHigh":tempHi
		}
		axios.patch(DatabaseURL(), data)
			.catch((error) => {
				console.log(error)
			})
	}
	const handleID = (event) => {
		setID(event.target.value)
	}
	const handleTempLo = (event) => {
		setTempLo(event.target.value)
	}
	const handleTempHi = (event) => {
		setTempHi(event.target.value)
	}

	// Return table body
	return (
		<TableContainer component={Paper} sx={TABLE_STYLE}>
			<Table><TableBody><TableRow>
				<TableCell>
					<TextField
						required
						label="ID"
						variant="outlined"
						onChange={handleID}
					/>
				</TableCell>
				<TableCell>
					<TextField
						label="Temp. Lower"
						onChange={handleTempLo}
					/>
				</TableCell>
				<TableCell>
					<TextField
						label="Temp. Upper"
						onChange={handleTempHi}
					/>
				</TableCell>
				<TableCell>
					<Button variant="contained" disableElevation onClick={handleSubmit}>
						Submit
					</Button>
				</TableCell>
			</TableRow></TableBody></Table>
		</TableContainer>
	)
}

export default ThreshInput