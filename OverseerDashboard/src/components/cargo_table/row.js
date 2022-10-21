import React, { useState } from "react"
import axios from "axios"
import { TableRow, TableCell, Button, TextField } from "@mui/material"

import DatabaseURL from "../db_url"

const INPUT_FIELD_PROPS = {
	step:"0.1"
}
const COLORS = {
	default:"primary",
	modified:"warning"
}
const INPUT_FIELD_VARIANT = "outlined"

/**
 * Returns a formatted row of cargo data given said data
 */
const CargoRow = (args) => {
	// Set data
	const index = args.index
	const num = index + 1
	const row = args.row

	// TODO: Fix temperature values not being set properly on 0th index
	const [tempLoVal, setTempLoVal] = useState(row.tempThreshLow)
	const [tempHiVal, setTempHiVal] = useState(row.tempThreshHigh)
	const [tempLoColor, setTempLoColor] = useState(COLORS.default)
	const [tempHiColor, setTempHiColor] = useState(COLORS.default)

	// Event handlers
	const handleSubmit = () => {
		const data = {
			"id":row.name,
			"tempThreshLow":tempLoVal,
			"tempThreshHigh":tempHiVal
		}
		axios.patch(DatabaseURL(), data).catch((error) => console.log(error))
	}
	const handleReset = () => {
		setTempLoVal(row.tempThreshLow)
		setTempLoColor(COLORS.default)

		setTempHiVal(row.tempThreshHigh)
		setTempHiColor(COLORS.default)
	}
	const currTemp = (temp) => {
		return("Current: " + temp + "ºF")
	}

	// Return formatted row
	return (
		<TableRow key={index}>
			<TableCell>{num}</TableCell>
			<TableCell>{row.name}</TableCell>
			<TableCell>{row.temperature}</TableCell>
			<TableCell>{row.humidity}</TableCell>
			<TableCell>{row.driver}</TableCell>
			<TableCell>
				{row.notify ?
					<TextField
						value="Alert"
						color="error"
						variant="outlined"
						InputProps={{readOnly:true}}
						focused
					/> : <TextField
						value="None"
						variant="outlined"
						InputProps={{readOnly:true}}
					/>
				}
			</TableCell>
			<TableCell>
				<TextField
					focused
					type="number"
					inputProps={INPUT_FIELD_PROPS}
					variant={INPUT_FIELD_VARIANT}
					color={tempLoColor}
					label={currTemp(row.tempThreshLow)}
					value={tempLoVal}
					onChange={(e) => {
						setTempLoVal(e.target.value)
						setTempLoColor(e.target.value === String(row.tempThreshLow) ? COLORS.default : COLORS.modified)
					}}
				/>
			</TableCell>
			<TableCell>
				<TextField
					focused
					type="number"
					inputProps={INPUT_FIELD_PROPS}
					variant={INPUT_FIELD_VARIANT}
					color={tempHiColor}
					label={currTemp(row.tempThreshHigh)}
					value={tempHiVal}
					onChange={(e) => {
						setTempHiVal(e.target.value)
						setTempHiColor(e.target.value === String(row.tempThreshHigh) ? COLORS.default : COLORS.modified)
					}}
				/>
			</TableCell>
			<TableCell>
				<Button variant="contained" disableElevation onClick={handleSubmit}>
					Upload #{num}
				</Button>
			</TableCell>
			<TableCell>
				<Button variant="outlined" onClick={handleReset}>
					Clear #{num}
				</Button>
			</TableCell>
		</TableRow>
	)
}

export default CargoRow