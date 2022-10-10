import React from "react"

import DataHead from "./head.js"
import DataBody from "./body.js"

/**
 * Our Table component, a collection of header and body
 */
const DataTable = () => {
	return (
		<table>
			<DataHead/>
			<DataBody/>
		</table>
	)
}

export default DataTable