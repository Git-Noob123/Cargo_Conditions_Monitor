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