import React, { useState, useContext, useCallback, useEffect} from "react"

import ApplianceRow from "./appliance_row"
import { TableContainer, TableBody, Paper, Table, TableCell, TableHead, TableRow } from "@mui/material"
import { LoginContext } from "../../main_app"
import CargoDataFetcher from "../../controllers/cargo_data_fetcher"

const AppliancesForm = () => {
    const [data, setData] = useState([]);
    const {currUser} = useContext(LoginContext)
    const handleFetch = useCallback(() => {
		CargoDataFetcher(currUser)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			})
	}, [currUser])

	// Fetch data immediately on page load
	useEffect(() => {
		handleFetch()
	}, [handleFetch])

    if(data.length === 0){
        return (
            <p>N/A</p>
        )
    }
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