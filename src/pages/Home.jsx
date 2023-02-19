import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/About";
import Footer from "../components/Footer";

const Home = ({handle}) => {
  return (
    <div>
      <Hero handle={handle} />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
