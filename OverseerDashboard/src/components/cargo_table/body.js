import React, {useEffect, useState} from "react"

import CargoDataFetcher from "../../controllers/cargo_data_fetcher"

// Default JSON array for when data fetching fails
const EMPTY_DATA = [{
	"id":"n/a",
	"name":"n/a",
	"temperature":0,
	"humidity":0,
	"driver":"n/a",
	"notify":false
}]

/**
 * We fetch our data here inside this body component
 * @return the body of the table
 */
const DataBody = () => {
	// Set up hooks
	const [cargo, setCargo] = useState([])
	useEffect(() => {
		const interval = setInterval(() => {
			handleFetch()
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	// Handle fetched data
	const handleFetch = () => {
		CargoDataFetcher()
			.then((response) => {
				setCargo(response.data)
			})
			.catch((error) => {
				console.log(error)
				setCargo(EMPTY_DATA)
			})
	}

	// Fetch data immediately on page load
	if (cargo.length === 0) {
		setCargo(EMPTY_DATA)
	}
	else {
		handleFetch()
	}

	// Map cargo JSON array to table body
	const bodyData = cargo.map((row, index) => {
		return (
			<tr key={index}>
				<td>{index}</td>
				<td>{row.id}</td>
				<td>{row.name}</td>
				<td>{row.temperature}</td>
				<td>{row.humidity}</td>
				<td>{row.driver}</td>
				<td>{row.notify ? "Yes" : "No"}</td>
			</tr>
		)
	})

	// Return formatted body
	return(
		<tbody>
			{bodyData}
		</tbody>
	)
}

export default DataBody