import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex flex-col md:flex-row gap-9 justify-center items-center">
      {services.map((services) => (
        <ServiceCard key={services.label} {...services} />
      ))}
    </section>
  );
};

export default Services;
