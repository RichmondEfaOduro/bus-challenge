import axios, { AxiosResponse } from "axios";
import { BusLine } from "../models/BusLine.interface";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

export const API = {
  getTest: (): Promise<BusLine[]> => requests.get("testbuslines"),
  getBusLines: (): Promise<BusLine[]> => requests.get("Buslines"),
};
