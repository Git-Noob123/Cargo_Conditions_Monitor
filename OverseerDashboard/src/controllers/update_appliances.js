import axios from "axios"

const UpdateAppliance = async (payload) => {
    return await axios.patch(`http://localhost:5050/Api/Cargos/Appliances`, payload);
}

export default UpdateAppliance;