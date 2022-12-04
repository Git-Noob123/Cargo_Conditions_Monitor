/* appliances_row.js    Jerry Dong, Justin Potter    Virginia Tech    October 30, 2022
 * This defines a single row of the appliances table. Every row has a switch for each appliance for
 * the overseer to toggle it on/off, which will send a request to the server with that toggle
 * Modified November 9, 2022 to make appliance rows' buttons comply with the web app's universal
 * button style
 */

import React, { useState } from "react"

import { TableRow, TableCell, Button } from "@mui/material"
import Switch from "@mui/material/Switch";

import UpdateAppliance from "../../controllers/update_appliances";
import StatusPopup from "../status_popup"
import ButtonStyle from "../button_style"

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
      StatusPopup(true)
      console.log("Appliances set");
    })
    .catch((error) => {
      StatusPopup(false)
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
              style={ButtonStyle()}
              onClick= {()=>{
                updateAppliance()
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