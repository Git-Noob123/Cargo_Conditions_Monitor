import axios from "axios"

const CargoDataFetcher = async (username) => {
	let url = "http://localhost:5050/Api/Cargos?overseer="+username;
	return await axios.get(url);
}

export default CargoDataFetcher