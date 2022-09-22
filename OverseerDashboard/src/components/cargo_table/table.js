import React from "react"
import Header from "./header.js"
import Body from "./body.js"

/**
 * Our Table component, a collection of header and body
 */
const Table = () => {
	return (
		<table>
			<Header/>
			<Body/>
		</table>
	)
}

export default Table