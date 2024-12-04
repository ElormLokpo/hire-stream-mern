import axios from "axios";
import { baseApiEndpoint } from "../../constants";

export const axiosInstance = axios.create({baseURL:baseApiEndpoint})