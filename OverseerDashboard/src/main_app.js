import React from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CargoLayout from "./layouts/cargo_layout.js"

/**
 * We do our routings here at this level, as well as global components, such as top nav bar
 * Routings will look like a state machine(doesn't really have to)
 */
const MainApp = () => {
	return (
		
		<>
		<AppBar 
			position="static"
			style={{ background: '#630031' }}>
			<Toolbar>
				<Button color="inherit">Home</Button>
				<Button color="inherit"> Return to Login</Button>
			</Toolbar>
		</AppBar>
		<CargoLayout />
		</>
	)
}

export default MainApp