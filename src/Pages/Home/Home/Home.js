import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import { Helmet } from 'react-helmet-async';
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Home = () => {
  return (
    <>
      <PageTitle title='home'></PageTitle>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </>
  );
};

export default Home;
