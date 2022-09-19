import React, {Component} from 'react'
import Table from './table.js'

/**
 * id:int
 * name:string
 * temperature:float
 * humidity:float
 * driver:string
 * notification:bool
 */

class App extends Component {
	// TODO: Remove hard-coded values
	state = {
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

	render() {
		const {cargo} = this.state
		return (
			<div className='container'>
				<h1>Welcome, Overseer!</h1>
				<Table
					cargoData={cargo}
				/>
			</div>
		)
	}
}

export default App