import React from "react"
import axios from "axios"

const fetchURL = 'localhost:5050/Api/Cargos'

/**
 * id:int
 * name:string
 * temperature:float
 * humidity:float
 * driver:string
 * notification:bool
 */

/**
 * We fetch our data here inside this body component
 * @returns the body of the table
 */
const Body = () => {
	const state = [
		{ id:"12345", name:"Product 1", temperature:15.5, humidity:20.2, driver:"Doe, John", notification:false },
		{ id:"67890", name:"Product 2", temperature:10.1, humidity:14.0, driver:"Doe, Jane", notification:true }
	]

	let data = state.map((row, index) => {
		return <tr key={index}>
				<td>{row.id}</td>
				<td>{row.name}</td>
				<td>{row.temperature}</td>
				<td>{row.humidity}</td>
				<td>{row.driver}</td>
				<td>{row.notification ? "Yes" : "No"}</td>
			</tr>
	})

	React.componentDidMount = () => {
		axios.get(fetchURL).then(response => {
			const cargoRes = response.data
			this.setState({cargoRes})
		})
	}

	return (<tbody>{data}</tbody>);
}

export default Body;