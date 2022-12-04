/* status_popup.js    Justin Potter    Virginia Tech    November 4, 2022
 * This defines a react-toastify popup to let overseer know whether their updated value(s) went
 * through to the server
 * Modified November 9, 2022 to rename from "popup.js" and "Popup" to "status_popup.js" and
 * "StatusPopup"
 */

import { toast } from "react-toastify"

const StatusPopup = (success) => {
	if (success) {
		toast.success("Upload success!")
	}
	else {
		toast.error("Upload failed.")
	}
}

export default StatusPopup