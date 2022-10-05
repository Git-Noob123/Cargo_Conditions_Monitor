import React from "react"
import {useEffect, useState} from "react";

import CargoDataFetcher from "../../controllers/cargo_data_fetcher"

/**
 * We fetch our data here inside this body component
 * @return the body of the table
 */
const Body = () => {
	const [cargo, setCargo] = useState({})

	useEffect(() => {
		const interval = setInterval(() => {
			setCargo(CargoDataFetcher())
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	let bodyData = cargo.map((row, index) => {
		return (
			<tr key={index}>
				<td>{index}</td>
				<td>{row.id}</td>
				<td>{row.name}</td>
				<td>{row.temperature}</td>
				<td>{row.humidity}</td>
				<td>{row.driver}</td>
				<td>{row.notification ? "Yes" : "No"}</td>
			</tr>
		)
	})

	return(
		<tbody>
			{bodyData}
		</tbody>
	)
}

export default Body