/* cargo_data_fetcher.js    Justin Potter, Jerry Dong    Virginia Tech    October 4, 2022
 * This defines a component that fetches cargo data from the database
 * Modified October 18, 2022 to avoid hard-coded database URL
 */

import axios from "axios"

import DatabaseURL from "../components/db_url"

const CargoDataFetcher = async (username) => {
	return await axios.get(DatabaseURL() + "?overseer=" + username)
}

export default CargoDataFetcher