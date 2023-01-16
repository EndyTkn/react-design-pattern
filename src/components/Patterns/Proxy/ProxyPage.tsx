import axios, { AxiosError, AxiosHeaders, AxiosResponse } from "axios"
import { Buffer } from "buffer"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { DataGetter } from "./DataGetter"
import { IDataGetter } from "./IDataGetter"
import { ProxyDataGetter } from "./ProxyDataGetter"

export const ProxyPage = () => {
    const [proxy, setProxy] = useState<IDataGetter>();
    const [imgData, setImgData] = useState<string>("");

    const URL = "https://i.picsum.photos/id/664/200/300.jpg?hmac=Ov1G0ZpIuC3e0t33HURn4DPJFK6o7bz602P6M-o_SDc";

    useEffect(() => {
        const dataGetter = new DataGetter();
        const proxy = new ProxyDataGetter(dataGetter);
        setProxy(proxy);
    }, [])

    const loadImageContent = async () => {
        const res = await proxy?.getData(URL, {
            responseType: "arraybuffer"
        });
        if (axios.isAxiosError(res) || !res)
            return;
        const image64 = Buffer.from(res.data, "binary").toString("base64");
        setImgData(image64);
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <h1>
                        Proxy Pattern
                    </h1>
                    <p>
                        Proxy for Data Content, store a cache data. See Logs
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={() => loadImageContent()}>Press To Load Image</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <>
                        <h2>Content:</h2>
                        <img src={"data:image/jpeg;base64,"+imgData} alt="" />
                    </>
                </Col>
            </Row>
        </Container>
    )
}