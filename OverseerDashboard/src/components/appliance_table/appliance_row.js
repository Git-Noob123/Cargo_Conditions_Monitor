import React, { useState } from "react"

import { TableRow, TableCell, Button } from "@mui/material"
import Switch from "@mui/material/Switch";
const ApplianceRow = (props) => {
  const [acState, setacState] = useState(props.ac);
  const [heaterState, setHeaterState] = useState(props.heater);
  const [humidifierState, setHumidifierState] = useState(props.humidifier);
  const [dehumidifierState, setDehumidifierState] = useState(props.dehumidifier);
	return (
    <TableRow>
        <TableCell align="center">
          {props.id}
        </TableCell>
        <TableCell align="center">
          <Switch
            checked={acState}
            onChange={()=>{
              setacState(!acState);
            }}
          />
        </TableCell>
        <TableCell align="center">
          <Switch
              checked={heaterState}
              onChange={()=>{
                setHeaterState(!heaterState);
              }}
            />
        </TableCell>
        <TableCell align="center">
          <Switch
                checked={humidifierState}
                onChange={()=>{
                  setHumidifierState(!humidifierState);
                }}
              />
        </TableCell>
        <TableCell align="center">
          <Switch
                checked={dehumidifierState}
                onChange={()=>{
                  setDehumidifierState(!dehumidifierState);
                }}
              />
        </TableCell>
        <TableCell align="center">
            <Button 
              variant="contained"
              style={{
                background: '#630031',
              }}
            >
              Update
            </Button>
        </TableCell>
      </TableRow>
	)
}

export default ApplianceRow;