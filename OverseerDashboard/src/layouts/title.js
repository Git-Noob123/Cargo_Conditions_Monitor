import { Typography } from "@mui/material"

const MARGIN = 2

const Title = (args) => {
	return(
		<Typography variant="h3" align="center" sx={{m:MARGIN}}>
			{args.text}
		</Typography>
	)
}

export default Title