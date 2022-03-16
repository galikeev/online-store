import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';

import bigStar from '../assets/bigStar.svg'

const DevicePage = () => {
    const device = {id: 1, name: 'iPhone 12 Pro', price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-lpc/1520633/ef2a27b6-800c-4a83-a864-192193c41b38/orig'};
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12 мп'},
        {id: 3, title: 'Процессор', description: 'A15'},
        {id: 4, title: 'Кол-во ядер', description: '4'},
        {id: 5, title: 'Аккумулятор', description: '4000'},
    ]

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image src={device.img} width={300} height={300}/>
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
                {description.map((info, index) => {
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