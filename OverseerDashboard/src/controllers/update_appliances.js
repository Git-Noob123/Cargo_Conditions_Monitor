import axios from "axios"

import DatabaseURL from "../components/db_url"

const UpdateAppliance = async (payload) => {
    return await axios.patch(DatabaseURL() + `/Appliances`, payload);
}

export default UpdateAppliance;
