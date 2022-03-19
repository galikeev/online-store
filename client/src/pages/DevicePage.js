import { useEffect, useState } from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

import { fetchOneDevice } from '../http/deviceAPI';

import bigStar from '../assets/bigStar.svg'

const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();
    useEffect(() => {
        fetchOneDevice(id)
            .then(data => setDevice(data));
    }, [])

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image src={process.env.REACT_APP_API_URL + device.img} width={300} height={300}/>
                </Col>
                <Col md={4}>
                    <div className='d-flex align-items-center flex-column'>
                        <h2>{device.name}</h2>
                        <div 
                            className='d-flex align-items-center justify-content-center' 
                            style={{'background': `url(${bigStar}) no-repeat center center`,'width': '240px', 'height': '240px', 'backgroundSize': 'cover', 'fontSize': '64px'}}
                        >
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{'width': '300px', 'height': '300px', 'fontSize': '32px', 'border': '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant='outline-dark'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {device.info.map((info, index) => {
                    return (
                        <Row key={info.id} style={{'background': index % 2 === 0 ? 'lightgray' : 'tranperent', 'padding': '10px'}}>
                            {info.title}: {info.description}
                        </Row>
                    )
                })}
            </Row>
        </Container>
    );
};

export default DevicePage;