import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you want to delete this item??")
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Deleted Successfully:', data);
                    const remainig = services.filter(service => service._id !== id);
                    setServices(remainig);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Your Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;