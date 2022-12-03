/* login_form.js    Jerry Dong, Justin Potter    Virginia Tech    October 13, 2022
 * This defines a component that allows an overseer to log into the dashboard. Without logging in,
 * an overseer cannot view his/her assigned cargo entries
 * Modified November 12, 2022 to remove leftover whitespace and TODOs
 */

import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box } from "@mui/material"

import VerifyLogin from "../controllers/submit_login_info";
import { LoginContext } from "../main_app";

// TODO (QOL): Allow sending login info when 'enter' is pressed
/**
 * Login page
 */

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	const {setCurrUser, setLoggedIn } = useContext(LoginContext);


	const handleSubmit = ()=>{
		const payload = {
			"username" : username,
			"password" : password
		}
		VerifyLogin(payload)
		.then((response) => {
			navigate('/cargos');
			setCurrUser(username);
			setLoggedIn(true);
		})
		.catch((error) => {
			setError(true);
			setLoggedIn(false);
			setCurrUser("");
		})
	}

	return (
		<div style={{display: 'flex',  justifyContent:'center'}}>
			<Box component="form">
				<div>
					<TextField
						required
						error = {error}
						id="usernameInput"
						label="Username"
						variant="filled"
						sx={{
							width: 420,
							marginBottom : 2,
						}}
						onChange = {(e)=>{
							setUsername(e.target.value);
						}}
						helperText={error ? "Invalid username/password." : ""}
						/>
				</div>
				<div>
					<TextField
						required
						error = {error}
						id="passwordInput"
						label="Password"
						variant="filled"
						type = 'password'
						sx={{
							width: 420,
							marginBottom : 2
						}}
						onChange = {(e)=>{
							setPassword(e.target.value);
						}}
						helperText={error ? "Invalid username/password." : ""}
						/>
				</div>
				<div>
					<Button
						variant="contained"
						style={{
							background: '#630031',
						}}
						size = 'large'
						onClick={
							()=>{
								handleSubmit()
						}}
					>
						Login
					</Button>
				</div>

			</Box>
		</div>
	)
}

export default LoginForm