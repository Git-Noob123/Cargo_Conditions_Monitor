import React from "react"
import Header from "./header.js"
import Body from "./body.js"

/**
 * Our Table component, a collection of header and body
 */
const Table = (data) => {
	return (
		<table>
			<Header/>
			<Body data={data.data}/>
		</table>
	)
}

export default Table