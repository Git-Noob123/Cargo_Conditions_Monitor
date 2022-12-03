/* login_layout.js    Jerry Dong, Justin Potter    Virginia Tech    October 18, 2022
 * This defines the layout of the login page. It contains a header and a login form.
 * Modified November 9, 2022 to add a page header that is consistent wih the other pages
 */

import React from "react"

import LoginForm from "../components/login_form";
import Title from "./title";


const LoginLayout = () => {
	return (
		<div>
			<Title text="Overseer Dashboard" />
			<LoginForm/>
		</div>
	)
}

export default LoginLayout;