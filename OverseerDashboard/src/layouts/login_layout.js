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