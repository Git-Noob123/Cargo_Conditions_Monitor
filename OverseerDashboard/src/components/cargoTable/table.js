import React from 'react'
import Header from './header';
import Body from './body';


/**
 * Our Table component, a collection of header and body
 * 
 */
const Table = () => {
	return (
		<table>
			<Header />
			<Body/>
		</table>
	)
}

export default Table