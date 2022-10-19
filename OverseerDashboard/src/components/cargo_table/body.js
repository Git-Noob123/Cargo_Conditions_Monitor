import React, { useEffect, useState, useCallback, useContext } from "react"
import { TableBody, TableRow, TableCell } from "@mui/material"

import { LoginContext } from "../../main_app"
import CargoDataFetcher from "../../controllers/cargo_data_fetcher"

// Default JSON array for when data fetching fails
const EMPTY_DATA = [{
	"id":"n/a",
	"name":"n/a",
	"temperature":0,
	"humidity":0,
	"driver":"n/a",
	"notify":false,
	"tempThreshLow":0,
	"tempThreshHigh":0
}]

/**
 * We fetch our data here inside this body component
 * @return the body of the table
 */
const CargoBody = () => {
	const [cargo, setCargo] = useState([])
	const {currUser} = useContext(LoginContext)

	// Handle fetched data, fixed React warning for not putting handleFetch inside a hook. Also not putting the function inside a hook would cause rerendering issues
	const handleFetch = useCallback(() => {
		CargoDataFetcher(currUser)
			.then((response) => {
				setCargo(response.data)
			})
			.catch((error) => {
				console.log(error)
				setCargo(EMPTY_DATA)
			})
	}, [currUser])

	// Fetch data immediately on page load
	useEffect(() => {
		handleFetch()
	}, [handleFetch])

	// Fetch data every interval
	useEffect(() => {
		const interval = setInterval(() => {
			handleFetch()
		}, 5000)
		return () => clearInterval(interval)
	}, [handleFetch])

	// Use placeholder data if cannot fetch data
	if (cargo.length === 0) {
		setCargo(EMPTY_DATA)
	}

	// Map cargo JSON array to table body
	const rows = cargo.map((row, index) => {
		return (
			<TableRow>
				<TableCell>{index}</TableCell>
				<TableCell>{row.name}</TableCell>
				<TableCell>{row.temperature}</TableCell>
				<TableCell>{row.humidity}</TableCell>
				<TableCell>{row.driver}</TableCell>
				<TableCell>{row.notify ? "Yes" : "No"}</TableCell>
				<TableCell>{row.tempThreshLow}</TableCell>
				<TableCell>{row.tempThreshHigh}</TableCell>
			</TableRow>
		)
	})

	// Return formatted body
	return (
		<TableBody>
			{rows}
		</TableBody>
	)
}

export default CargoBody