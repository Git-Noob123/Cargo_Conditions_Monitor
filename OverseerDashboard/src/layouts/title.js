import { Typography } from "@mui/material"

const Title = (args) => {
	return(
		<Typography variant="h3" align="center" sx = {{m:2}}>
			{args.text}
		</Typography>
	)
}

export default Title