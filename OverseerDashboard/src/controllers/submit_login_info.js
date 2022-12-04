import axios from "axios"

const VerifyLogin = async (payload) => {
    // console.log(payload);
    return await axios.post(`http://localhost:5050/Api/Overseers/Login`, payload);
}

export default VerifyLogin