import React, { useEffect, useState } from "react";
import "./Services.css";
import repair1 from "../../../images/repair1 .png";
import Service from "../Service/Service";

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
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className='container'>
      <h1 className='services-title mt-5'>Our Services</h1>
      <div className='services-container'>
        {
          services.map(service => <Service key={service.id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Services;
