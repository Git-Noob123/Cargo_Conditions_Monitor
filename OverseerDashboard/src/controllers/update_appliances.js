/* update_appliances.js    Yuxiang Dong, Justin Potter    Virginia Tech    November 2, 2022
 * This defines a component that sends a PATCH request to the database when the overseer toggles
 * on/off an appliance
 * Modified November 3, 2022 to replace hard-coded database URL
 */

import axios from "axios"

import DatabaseURL from "../components/db_url"

const UpdateAppliance = async (payload) => {
    return await axios.patch(DatabaseURL() + `/Appliances`, payload);
}

export default UpdateAppliance;
