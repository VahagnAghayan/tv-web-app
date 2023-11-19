import axios, { AxiosInstance } from "axios";
import IMovieData from "../types/movieType";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

class AxiosDataService {
  getAllTrendingNow() {
    return axiosInstance.get<IMovieData[]>("/TrendingNow");
  }

  getTrendingNow(Id: number) {
    return axiosInstance.get<IMovieData>(`/TrendingNow?Id=${Id}`);
  }

  getFeatured() {
    return axiosInstance.get<IMovieData>(`/Featured`);
  }
}

export default new AxiosDataService();
