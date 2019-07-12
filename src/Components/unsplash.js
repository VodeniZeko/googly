import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID e0fb092e6df70ada87ed7153ab61ddc30eab077c7e95c6d5005e129fe9d19452"
	}
});
