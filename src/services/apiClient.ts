import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
	baseURL: "https://restcountries.com/v3.1"
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig) => {
		return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
	};

	get = (id: string, getFirstValue: boolean = false, config?: AxiosRequestConfig) => {
		return axiosInstance
			.get<T>(`${this.endpoint}/${id}`, config)
			.then<T>((res) => getFirstValue && Array.isArray(res.data) ? res.data[0] : res.data);
	};
}

export default APIClient;
