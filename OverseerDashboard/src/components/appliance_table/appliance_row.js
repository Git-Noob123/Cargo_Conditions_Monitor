import React, { useState } from "react"

import { TableRow, TableCell, Button } from "@mui/material"
import { toast } from "react-toastify"
import Switch from "@mui/material/Switch";
import UpdateAppliance from "../../controllers/update_appliances";
const ApplianceRow = (props) => {
  const [acState, setacState] = useState(props.ac);
  const [heaterState, setHeaterState] = useState(props.heater);
  const [humidifierState, setHumidifierState] = useState(props.humidifier);
  const [dehumidifierState, setDehumidifierState] = useState(props.dehumidifier);
  const updateAppliance=()=>{
    const payload = {
      "id":props.id,
      "ac":acState,
      "heater":heaterState,
      "humidifier":humidifierState,
      "dehumidifier":dehumidifierState
    };
    UpdateAppliance(payload).then((response) => {
      toast.success("Upload succeeded!")
      console.log("Appliances set");
    })
    .catch((error) => {
      toast.error("Failed to upload. Please try again.")
      console.log(error);
    })
  }
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
              onClick= {()=>{
                updateAppliance();
                }
              }
            >
              Update
            </Button>
        </TableCell>
      </TableRow>
	)
}

export default ApplianceRow;