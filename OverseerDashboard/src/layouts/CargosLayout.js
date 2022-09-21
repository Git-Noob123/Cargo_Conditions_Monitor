import React from "react";
import Table from "../components/cargoTable/table";

const CargosLayout = () => {

// TODO: Remove hard-coded values
	const state = {
		cargo: [{
			id: '12345',
			name: 'Product 1',
			temperature: 15.5,
			humidity: 20.2,
			driver: 'Doe, John',
			notification: false
		},{
			id: '67890',
			name: 'Product 2',
			temperature: 10.1,
			humidity: 14.0,
			driver: "Doe, Jane",
			notification: true
		}]
	}

	// console.log(state.cargo);
    return (
        <div className='container'>
 				<h1>Welcome, Overseer!</h1>
 				<Table
 					cargoData={state}
 				/>
 		</div>
    );
}

export default CargosLayout;