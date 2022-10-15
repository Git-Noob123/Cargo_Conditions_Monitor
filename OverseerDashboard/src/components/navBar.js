import React from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
    const navigate = useNavigate();
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
                        navigate('/login');
                    }} 
            > 
                Return to Login
            </Button>
        </Toolbar>
    </AppBar>)
}

export default NavBar;