import axios from "axios"

import DatabaseURL from "../components/db_url"

const CargoDataSetter = async (args) => {
	return await axios.patch(DatabaseURL(), args.data)
}

export default CargoDataSetter