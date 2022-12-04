/* cargo_data_setter.js    Justin Potter    Virginia Tech    October 31, 2022
 * This defines a component that sends a PATCH request when overseer sends updated threshold values
 * Modified November 1, 2022 to finish humidity threshold input
 */

import axios from "axios"

import DatabaseURL from "../components/db_url"

const CargoDataSetter = async (data) => {
	return await axios.patch(DatabaseURL(), data)
}

export default CargoDataSetter