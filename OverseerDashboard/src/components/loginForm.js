import React, { useState } from "react"
import { Button, TextField, Box } from "@mui/material"
import VerifyLogin from "../controllers/submit_login_info";
import { useNavigate } from "react-router-dom";
/**
 * Login page
 */
const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	const handleSubmit = ()=>{
		const payload = {
			"username" : username,
			"password" : password
		}
		VerifyLogin(payload)
		.then((response) => {
			navigate('/cargos');
		})
		.catch((error) => {
			setError(true);
		})
	}



	return (
		<div style={{display: 'flex',  justifyContent:'center'}}>
			<Box
				component="form"
    		>
				<p style={ {fontSize: 28} }>Login to Overseer Dashboard</p>
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