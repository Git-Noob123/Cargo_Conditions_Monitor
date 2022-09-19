import React from 'react'

const Header = () => {
	return (
		<thead>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Temperature</th>
				<th>Humidity</th>
				<th>Driver</th>
				<th>Notification</th>
			</tr>
		</thead>
	)
}

const Body = (props) => {
	const data = props.cargoData.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.id}</td>
				<td>{row.name}</td>
				<td>{row.temperature}</td>
				<td>{row.humidity}</td>
				<td>{row.driver}</td>
				<td>{row.notification ? 'Yes' : 'No'}</td>
			</tr>
		)
	})

	return <tbody>{data}</tbody>
}

const Table = (props) => {
	const {cargoData} = props;
	return (
		<table>
			<Header />
			<Body cargoData={cargoData} />
		</table>
	)
}

export default Table