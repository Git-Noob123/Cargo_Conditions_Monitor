import { TextField } from "@mui/material"

const INPUT_PROPS = {
	readOnly:true
}

const RangeWarningCell = (args) => {
	if (args.is_in_range) {
		return (
			<TextField
				label="In range"
				variant="outlined"
				value={args.value}
				InputProps={INPUT_PROPS}
			/>
		)
	}
	else {
		return (
			<TextField
				label="Out of range"
				variant="outlined"
				value={args.value}
				color="error"
				InputProps={INPUT_PROPS}
				focused
			/>
		)
	}
}

export default RangeWarningCell