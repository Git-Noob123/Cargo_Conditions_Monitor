/* submit_login_info.js    Jerry Dong    Virginia Tech    October 15, 2022
 * This defines a component that sends a POST request with login info when overseer tries to log in
 */

import axios from "axios"

const VerifyLogin = async (payload) => {
    // console.log(payload);
    return await axios.post(`http://localhost:5050/Api/Overseers/Login`, payload);
}

export default VerifyLogin