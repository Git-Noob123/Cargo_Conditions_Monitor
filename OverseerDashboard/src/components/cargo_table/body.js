import React from "react"

/**
 * We fetch our data here inside this body component
 * @return the body of the table
 */
const Body = (data) => {
	console.log(data) // TODO: Remove debug line
	const state = data.data

	let bodyData = state.map((row, index) => {
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

export default Body;