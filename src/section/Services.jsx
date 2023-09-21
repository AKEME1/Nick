import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-warp gap-9">
      {services.map((services) => (
        <ServiceCard />
      ))}
    </section>
  );
};

export default Services;
