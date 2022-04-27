import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from './../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { toast } from 'react-toastify';
const axios = require('axios').default;

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'akbar',
    //     email: 'akbar@mail.com',
    //     address: 'Tajmahal road Md.pur',
    //     phone: "0273455554"
    // })
    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     console.log(newUser);
    //     setUser(newUser)
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!')
                    event.target.reset();
                }
            })

    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order :{service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={user?.email} name='email' placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="number" name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value='place order' />
            </form>
        </div>
    );
};

export default Checkout;