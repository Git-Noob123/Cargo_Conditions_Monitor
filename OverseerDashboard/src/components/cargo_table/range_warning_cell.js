/* range_warning_cell.js    Justin Potter    Virginia Tech    October 24, 2022
 * This defines a cell that changes its color to tell the overseer whether the value displayed is in
 * or out of the specified threshold range
 * Modified October 26, 2022 to fix RangeWarningCell not being its own cell
 */

import { TableCell, TextField } from "@mui/material"

const INPUT_PROPS = {
	readOnly:true
}

const RangeWarningCell = (args) => {
	if (args.is_in_range) {
		return (
			<TableCell>
				<TextField
					label="In range"
					variant="outlined"
					value={args.value}
					InputProps={INPUT_PROPS}
				/>
			</TableCell>
		)
	}
	else {
		return (
			<TableCell>
				<TextField
					label="Out of range"
					variant="outlined"
					value={args.value}
					color="error"
					InputProps={INPUT_PROPS}
					focused
				/>
			</TableCell>
		)
	}
}

export default RangeWarningCell