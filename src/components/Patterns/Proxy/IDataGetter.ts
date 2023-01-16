import { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";

export interface IDataGetter {
    getData(url: string, headers: AxiosRequestConfig): Promise<AxiosResponse | AxiosError>;
}