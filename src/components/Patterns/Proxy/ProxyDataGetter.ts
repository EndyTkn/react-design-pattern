import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { DataGetter } from "./DataGetter";
import { IDataGetter } from "./IDataGetter";

export class ProxyDataGetter implements IDataGetter {
    dataGetter: DataGetter;
    dataCache: Promise<AxiosResponse | AxiosError> | undefined = undefined;
    constructor(dataGetter: DataGetter) {
        this.dataGetter = dataGetter;
    }

    getData(url: string, conf: AxiosRequestConfig) {
        if (this.dataCache === undefined) {
            console.log("fetching img")
            this.dataCache = this.dataGetter.getData(url, conf);
        } else console.log("getting img from proxy")

        return this.dataCache;
    }
}