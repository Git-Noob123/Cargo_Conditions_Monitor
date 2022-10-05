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
	// TODO: Fix cargoData being undefined
	const [cargoData, setCargoData] = useState(EMPTY_DATA)

	useEffect(() => {
		axios.get(getURL)
			.then((response) => {
				setCargoData(response.data)
			})
			.catch((error) => {
				console.log(error)
				setCargoData(EMPTY_DATA)
			})
	})
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