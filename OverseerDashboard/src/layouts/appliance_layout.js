import React from "react"
import AppliancesForm from "../components/appliance_table/appliance_table"



/**
 * Layout level is a collection of components, each layout file is a part we see on webpage.
 * For example, in our CargoLayout file, a component is the table, while another component is "Welcome, Overseer!"
 */
const ApplianceLayout = () => {
	return (
		<div className="container" style={{display: 'flex',  justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
				<h1>Set appliances here</h1>
                <AppliancesForm/>
		</div>
	)
}

export default ApplianceLayout