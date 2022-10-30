import React, { useState} from "react"

import ApplianceRow from "./appliance_row"
import { TableContainer, TableBody, Paper, Table, TableCell, TableHead, TableRow } from "@mui/material"

const EMPTY_DATA = [{
	"id":"n/a",
	"ac": false,
    "heater": false,
    "humidifier": false,
    "dehumidifier": false
}]

const AppliancesForm = () => {
    const [data, setData] = useState(EMPTY_DATA);
	return (
        <TableContainer component={Paper} sx = {{maxWidth:900}}>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx = {{fontSize:'1.0rem', fontWeight:600}}>Cargo</TableCell>
                        <TableCell align="center" sx = {{fontSize:'1.0rem', fontWeight:600}}>A/C Status</TableCell>
                        <TableCell align="center" sx = {{fontSize:'1.0rem', fontWeight:600}}>Heater Status</TableCell>
                        <TableCell align="center" sx = {{fontSize:'1.0rem', fontWeight:600}}>Humidifier Status</TableCell>
                        <TableCell align="center" sx = {{fontSize:'1.0rem', fontWeight:600}}>Dehumidifier Status</TableCell>
                        <TableCell align="center" sx = {{fontSize:'1.0rem', fontWeight:600}}></TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
            {data.map((row, index) => (
                <ApplianceRow
                    key = {index}
                    id = {row.id}
                    ac = {row.ac}
                    heater = {row.heater}
                    humidifier = {row.humidifier}
                    dehumidifier = {row.dehumidifier}
                />
            ))}
            </TableBody>
            </Table>
        </TableContainer>
	)
}

export default AppliancesForm;