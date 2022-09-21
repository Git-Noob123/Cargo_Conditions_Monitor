import React from 'react'
import Header from './header';
import Body from './body';
const Table = (cargoData) => {
	// const {cargoData} = props;
	console.log(cargoData);
	return (
		<table>
			<Header />
			<Body cargoData={cargoData} />
		</table>
	)
}

export default Table