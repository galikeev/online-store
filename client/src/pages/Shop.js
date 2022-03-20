import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Col, Container, Row } from "react-bootstrap";

import { Context } from "../index";
import { fetchTypes, fetchBrands, fetchDevices } from "../http/deviceAPI";

import BrandBar from "../components/BrandBar";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";


const Shop = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes()
            .then(data => device.setTypes(data));
        fetchBrands()
            .then(data => device.setBrands(data));
        fetchDevices(null, null, 1, 2)
            .then(data => {
                device.setDevices(data.rows);
                device.setTotalCount(data.count);
            });
    // eslint-disable-next-line  
    }, []);

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2)
            .then(data => {
                device.setDevices(data.rows);
                device.setTotalCount(data.count);
            });
    // eslint-disable-next-line  
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;