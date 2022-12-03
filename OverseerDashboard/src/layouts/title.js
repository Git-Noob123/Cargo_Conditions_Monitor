/* title.js    Justin Potter    Virginia Tech    November 9, 2022
 * This is a title component that all layouts should use to ensure every page's title is consistent
 * with the others
 * Modified November 12, 2022 to fix some formatting and modularity issues
 */

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