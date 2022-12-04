import axios from "axios"

import DatabaseURL from "../components/db_url"

const CargoDataFetcher = async (username) => {
	return await axios.get(DatabaseURL() + "?overseer=" + username)
}

export default CargoDataFetcher