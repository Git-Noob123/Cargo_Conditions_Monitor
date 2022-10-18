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
                Home
            </Button>
            <Button color="inherit"
                    onClick = {()=>{
                        setCurrUser("")
                        setLoggedIn(false)
                        navigate('/login');
                    }} 
            > 
                Return to Login
            </Button>
        </Toolbar>
    </AppBar>)
}

export default NavBar;