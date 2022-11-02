import axios from "axios"

import DatabaseURL from "../components/db_url"

const CargoDataSetter = async (data) => {
	return await axios.patch(DatabaseURL(), data)
}

export default CargoDataSetter