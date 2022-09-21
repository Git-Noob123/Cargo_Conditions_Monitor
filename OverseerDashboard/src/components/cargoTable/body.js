import React from "react";

const Body = (cargoData) => {
	// console.log(cargoData);
	let data = cargoData.map((row, index) => {
	
		return <tr key={index}>
				<td>{row.id}</td>
				<td>{row.name}</td>
				<td>{row.temperature}</td>
				<td>{row.humidity}</td>
				<td>{row.driver}</td>
				<td>{row.notification ? 'Yes' : 'No'}</td>
			</tr>
		
	})

	return (<tbody>{data}</tbody>);
}

export default Body;