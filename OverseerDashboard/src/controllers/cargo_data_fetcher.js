import axios from "axios"

const CargoDataFetcher = async () => {
	return await axios.get("http://localhost:5050/Api/Cargos")
}

export default CargoDataFetcher