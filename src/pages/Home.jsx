import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/About";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard/Dashboard";
import Transactions from "../components/Transactions/Transactions";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Dashboard />
      <Transactions />
      <Footer />
    </div>
  );
};

export default Home;
