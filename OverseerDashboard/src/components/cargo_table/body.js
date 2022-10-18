import React, {useEffect, useState, useCallback} from "react"
import { useContext } from "react";
import { LoginContext } from "../../main_app";
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
const Body = () => {
	// Set up hooks
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
	}, [currUser]);
		

	// Fetch data immediately on page load
	useEffect(() => {
		handleFetch()
	}, [handleFetch])

	useEffect(() => {
		const interval = setInterval(() => {
			handleFetch()
		}, 5000)
		return () => clearInterval(interval)
	}, [handleFetch])

	//removed else statement since the else statement causes too many component rerendering 
	if (cargo.length === 0) {
		setCargo(EMPTY_DATA)
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

export default Body