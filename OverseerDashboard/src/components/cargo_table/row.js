import React, { useState } from "react"
import axios from "axios"
import { TableRow, TableCell, Button, TextField } from "@mui/material"

import DatabaseURL from "../db_url"
import RangeWarningCell from "./range_warning_cell"

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

	const [tempLoVal, setTempLoVal] = useState(row.tempThreshLow)
	const [tempHiVal, setTempHiVal] = useState(row.tempThreshHigh)
	const [humiLoVal, setHumiLoVal] = useState(row.humidThreshLow)
	const [humiHiVal, setHumiHiVal] = useState(row.humidThreshHigh)
	const [tempLoColor, setTempLoColor] = useState(COLORS.default)
	const [tempHiColor, setTempHiColor] = useState(COLORS.default)
	const [humiLoColor, setHumiLoColor] = useState(COLORS.default)
	const [humiHiColor, setHumiHiColor] = useState(COLORS.default)

	// Event handlers
	const handleSubmit = () => {
		// TODO (urgent): Fix color after submission. Currently doesn't switch back from warning color to default color
		const data = {
			"id":row.name,
			"tempThreshLow":tempLoVal,
			"tempThreshHigh":tempHiVal,
			"humidThreshLow":humiLoVal,
			"humidThreshHigh":humiHiVal
		}
		axios.patch(DatabaseURL(), data).catch((error) => console.log(error))
	}
	const handleReset = () => {
		setTempLoVal(row.tempThreshLow)
		setTempLoColor(COLORS.default)

		setTempHiVal(row.tempThreshHigh)
		setTempHiColor(COLORS.default)

		setHumiLoVal(row.humidThreshLow)
		setHumiLoColor(COLORS.default)

		setHumiHiVal(row.humidThreshHigh)
		setHumiHiColor(COLORS.default)
	}
	const formatTemp = (temp) => {
		return(temp + "ºF")
	}
	const formatHumi = (humi) => {
		return(humi + "%")
	}
	const checkIfInRange = (value, min, max) => {
		return (min <= value && value <= max)
	}

	// Return formatted row
	return (
		<TableRow key={index}>
			{/* ID */}
			<TableCell>{num}</TableCell>

			{/* Item name */}
			<TableCell>{row.name}</TableCell>

			{/* Temperature reading */}
			<RangeWarningCell
				value={formatTemp(row.temperature)}
				is_in_range={checkIfInRange(row.temperature, row.tempThreshLow, row.tempThreshHigh)}
			/>

			{/* Humidity reading */}
			<RangeWarningCell
				value={formatHumi(row.humidity)}
				is_in_range={checkIfInRange(row.humidity, row.humidThreshLow, row.humidThreshHigh)}
			/>

			{/* Driver name */}
			<TableCell>{row.driver}</TableCell>

			{/* Alert */}
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

			{/* Temperature threshold (low) */}
			<TableCell>
				<TextField
					focused
					type="number"
					inputProps={INPUT_FIELD_PROPS}
					variant={INPUT_FIELD_VARIANT}
					color={tempLoColor}
					label={"Current: " + formatTemp(row.tempThreshLow)}
					value={tempLoVal}
					onChange={(e) => {
						setTempLoVal(e.target.value)
						setTempLoColor(e.target.value === String(row.tempThreshLow) ? COLORS.default : COLORS.modified)
					}}
				/>
			</TableCell>

			{/* Temperature threshold (high) */}
			<TableCell>
				<TextField
					focused
					type="number"
					inputProps={INPUT_FIELD_PROPS}
					variant={INPUT_FIELD_VARIANT}
					color={tempHiColor}
					label={"Current: " + formatTemp(row.tempThreshHigh)}
					value={tempHiVal}
					onChange={(e) => {
						setTempHiVal(e.target.value)
						setTempHiColor(e.target.value === String(row.tempThreshHigh) ? COLORS.default : COLORS.modified)
					}}
				/>
			</TableCell>

			{/* Humidity threshold (low) */}
			<TableCell>
				<TextField
					focused
					type="number"
					inputProps={INPUT_FIELD_PROPS}
					variant={INPUT_FIELD_VARIANT}
					color={humiLoColor}
					label={"Current: " + formatHumi(row.humidThreshLow)}
					value={humiLoVal}
					onChange={(e) => {
						setHumiLoVal(e.target.value)
						setHumiLoColor(e.target.value === String(row.humidThreshLow) ? COLORS.default : COLORS.modified)
					}}
				/>
			</TableCell>

			{/* Humidity threshold (high) */}
			<TableCell>
				<TextField
					focused
					type="number"
					inputProps={INPUT_FIELD_PROPS}
					variant={INPUT_FIELD_VARIANT}
					color={humiHiColor}
					label={"Current: " + formatHumi(row.humidThreshHigh)}
					value={humiHiVal}
					onChange={(e) => {
						setHumiHiVal(e.target.value)
						setHumiHiColor(e.target.value === String(row.humidThreshHigh) ? COLORS.default : COLORS.modified)
					}}
				/>
			</TableCell>

			{/* Upload new thresholds */}
			<TableCell>
				<Button variant="contained" disableElevation onClick={handleSubmit}>
					Upload #{num}
				</Button>
			</TableCell>

			{/* Clearn new thresholds */}
			<TableCell>
				<Button variant="outlined" onClick={handleReset}>
					Clear #{num}
				</Button>
			</TableCell>
		</TableRow>
	)
}

export default CargoRow