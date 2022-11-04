import { toast } from "react-toastify"

const Popup = (success) => {
	if (success) {
		toast.success("Upload success!")
	}
	else {
		toast.error("Upload failed. Please try again.")
	}
}

export default Popup