import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Row } from "react-bootstrap";

import { Context } from "../index";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context);

    return (
        <Row className="d-flex">
            {device.devices.map(device => {
                return <DeviceItem key={device.id} device={device}/>
            })}
        </Row>
    );
});

export default DeviceList;