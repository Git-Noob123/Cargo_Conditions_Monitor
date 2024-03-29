/* body.js    Justin Potter    Virginia Tech    September 22, 2022
 * This defines the body of the cargo data table. It fetches the cargo data from the server at a set
 * interval to update the table with latest cargo data values, adding or removing rows if necessary
 * Modified November 12, 2022 to fix DOM nesting issue
 */

import React, { useEffect, useState, useCallback, useContext } from "react"
import { TableBody, TableRow, TableCell } from "@mui/material"

import { LoginContext } from "../../main_app"
import CargoDataFetcher from "../../controllers/cargo_data_fetcher"
import CargoRow from "./row"

const LOADING_TEXT = "Fetching data. Please wait..."

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
				setCargo([])
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

	// If data has been successfully fetched, return formatted body. Otherwise return placeholder
	if (cargo.length === 0) {
		return (
			<TableBody><TableRow><TableCell>
				{LOADING_TEXT}
			</TableCell></TableRow></TableBody>
		) // TODO: Fix formatting. Currently, this awkwardly inserts the loading text into the first column only.
	}
	else {
		return (
			<TableBody>
				{cargo.map((row, index) => {
					return <CargoRow row={row} index={index} key={index} />
				})}
			</TableBody>
		)
	}
}

export default CargoBody