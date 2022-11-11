import { Typography } from "@mui/material"

const Title = (args) => {
	return(
		<Typography variant="h3" align="center">
			{args.text}
		</Typography>
	)
}

export default Title