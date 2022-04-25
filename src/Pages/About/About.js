import React from "react";
import { Helmet } from "react-helmet-async";
import "./About.css";
import PageTitle from './../Shared/PageTitle/PageTitle';

const About = () => {
  return (
    <div>
      <PageTitle title='about'></PageTitle>
      <h3>This is About</h3>
    </div>
  );
};

export default About;
