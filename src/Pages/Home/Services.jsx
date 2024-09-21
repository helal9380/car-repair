/** @format */

import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-10">
      <SectionTitle
        title={"Services"}
        subTitle={"Our Service Area"}
        description={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. "
        }></SectionTitle>
      <div id="service" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
