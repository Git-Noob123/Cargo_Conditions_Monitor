import React, { useState, useContext } from "react"
import axios from "axios"

import DatabaseURL from "../db_url"

const INPUT_STYLE = {
	"width":"15ch"
}

const ThreshBody = () => {
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
		<tbody>
			<td><input
				style={INPUT_STYLE}
				step={1}
				type="text"
				onChange={handleID}
			/></td>
			<td><input
				style={INPUT_STYLE}
				step={0.1}
				type="number"
				onChange={handleTempLo}
			/></td>
			<td><input
				style={INPUT_STYLE}
				step={0.1}
				type="number"
				onChange={handleTempHi}
			/></td>
			<td><button onClick={handleSubmit}>
				Submit
			</button></td>
		</tbody>
	)
}

export default ThreshBody