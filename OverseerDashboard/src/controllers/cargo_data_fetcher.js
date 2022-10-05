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

const CargoDataFetcher = () => {
	// TODO: Fix cargo being undefined
	const [cargo, setCargo] = useState(EMPTY_DATA)

	useEffect = () => {
		setInterval(() => {
			axios.get(getURL)
				.then((response) => {
					setCargo(response.data)
				})
				.catch((error) => {
					console.log(error)
					setCargo(EMPTY_DATA)
				})
		}, 1000) // TODO: Set back to 5000ms
	}

	return(
		{cargo}
	)
}

export default CargoDataFetcher

/**
 * DATA FORMAT:
 *
 * id:int
 * name:string
 * temperature:float
 * humidity:float
 * driver:string
 * notification:bool
 */