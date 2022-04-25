import React, { useEffect, useState } from "react";
import "./Services.css";
import repair1 from "../../../images/repair1 .png";
import Service from "../Service/Service";
import useServices from './../../../hooks/useServices';

/* const services = [
  {
    id: 1,
    name: " oil change",
    price: 100,
    description: "",
    img: "https://i.ibb.co/VxY1Nj6/repair1.png",
  },
]; */

const Services = () => {
  const [services] = useServices();
  return (
    <div className='container  mt-5' id="services">
      <h1 className='services-title'>Our Services</h1>
      <div className='services-container'>
        {
          services.map(service => <Service key={service._id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Services;
