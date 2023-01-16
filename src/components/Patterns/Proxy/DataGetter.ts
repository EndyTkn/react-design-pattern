import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";
import { IDataGetter } from "./IDataGetter";

export class DataGetter implements IDataGetter {
    getData(url: string, conf: AxiosRequestConfig) {
        return new Promise<AxiosResponse| AxiosError>((resolve, reject) => {
            axios.get(url, conf)
                .then(response => resolve(response))
                .catch(err => reject(err))
        })
    }
}