/* db_url.js    Justin Potter    Virginia Tech    October 18, 2022
 * This is a function that returns a URL to the cargo database. Any component that needs to retrieve
 * data from the cargo DB should call this function instead of hard-coding the URL in case the URL
 * changes
 */

const DatabaseURL = () => {
	return ("http://localhost:5050/Api/Cargos")
}

export default DatabaseURL