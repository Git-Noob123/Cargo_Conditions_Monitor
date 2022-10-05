import React from "react"
import {useEffect, useState} from "react";
import axios from "axios"
const getURL = "http://localhost:5050/Api/Cargos"
const EMPTY_DATA = [{
	"id":"n/a",
	"name":"n/a",
	"temperature":0,
	"humidity":0,
	"driver":"n/a",
	"notification":false
}]

//import CargoDataFetcher from "../../controllers/cargo_data_fetcher"

/**
 * We fetch our data here inside this body component
 * @return the body of the table
 */
const Body = () => {
	const [cargo, setCargo] = useState([])

	const CargoDataFetcher = () => {
		axios.get(getURL)
			.then((response) => {
				setCargo(response.data)
			})
			.catch((error) => {
				console.log(error)
				setCargo(EMPTY_DATA)
			})
	}

	CargoDataFetcher()
	useEffect(() => {
		const interval = setInterval(() => {
			CargoDataFetcher()
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	if (cargo.length === 0) {
		setCargo(EMPTY_DATA)
	}
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