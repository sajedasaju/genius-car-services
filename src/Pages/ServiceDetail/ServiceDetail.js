import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>You are about to book :{service.name}</h2>
            <img src={service.img} alt="" />
            <div className='text-center'>
                <Link to='/checkout'>
                    <Button className='btn btn-primary'>Proceed Checkout</Button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;