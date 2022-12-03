/* nav_bar.js    Jerry Dong, Justin Potter    Virginia Tech    October 13, 2022
 * This defines a navigation bar that allows the overseer to navigate to different pages
 * Modified November 9, 2022 to change display text of logout button
 */

import React from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../main_app";
const NavBar = ()=>{
    const navigate = useNavigate();
    const {setCurrUser, setLoggedIn} = useContext(LoginContext)
    return (
    <AppBar
        position="static"
        style={{ background: '#630031' }}>
        <Toolbar>
            <Button color="inherit"
                    onClick={()=>{
                        navigate('/cargos');
                    }}
            >
                Cargo
            </Button>
            <Button color="inherit"
                    onClick={()=>{
                        navigate('/appliances');
                    }}
            >
                Appliances
            </Button>
            <Button color="inherit"
                    onClick = {()=>{
                        setCurrUser("")
                        setLoggedIn(false)
                        navigate('/login');
                    }}
            >
                Log out
            </Button>
        </Toolbar>
    </AppBar>)
}

export default NavBar;