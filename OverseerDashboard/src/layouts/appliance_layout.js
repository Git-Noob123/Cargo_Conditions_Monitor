/* appliance_layout.js    Yuxiang Dong, Justin Potter    Virginia Tech    October 30, 2022
 * This defines the layout of the appliances page. It contains a header and a form where the
 * overseer can toggle on/off appliances inside their cargo containers.
 * Modified November 9, 2022 to add a page header that is consistent wih the other pages
 */

import React from "react"

import AppliancesForm from "../components/appliance_table/appliance_table"
import Title from "./title"

/**
 * Layout level is a collection of components, each layout file is a part we see on webpage.
 * For example, in our CargoLayout file, a component is the table, while another component is "Welcome, Overseer!"
 */
const ApplianceLayout = () => {
	return (
		<div className="container" style={{display: 'flex',  justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
			<Title text="Appliances" />
            <AppliancesForm/>
		</div>
	)
}

export default ApplianceLayout