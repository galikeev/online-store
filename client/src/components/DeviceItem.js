import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { DEVICE_ROUTE } from "../utils/consts";

import star from '../assets/star.svg';


const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    console.log(navigate);

    return (
        <Col md={3} className='mt-3' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)} style={{'cursor': 'pointer'}}>
            <Card style={{'width': '150px', 'cursor': 'poiner'}} border='light'>
                <Image src={device.img} width={150} height={150}/>
                <div className="d-flex justify-content-between mt-1 text-black-50">
                    <div>Samsung..</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image src={star} width={18} height={18}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;