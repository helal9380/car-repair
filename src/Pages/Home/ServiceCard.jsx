/** @format */

import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card card-compact shadow-lg cursor-pointer">
      <div className="h-[300px]">
        <img
          className="h-full rounded"
          src={img}
          alt="Shoes"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions text-[#FF3811] font-bold justify-between">
          <h3>Price ${price}</h3>
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
