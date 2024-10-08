/** @format */
import React from "react";
import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh]">
      <div>
        <h2>Affordable Price For Car Servicing</h2>
      </div>
      <div
        id="slide1"
        className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl w-full h-full flex items-center text-white bg-gradient-to-r from-[#151515] to-[#78787800]">
          <div className="space-y-8 w-2/6 pl-8">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn text-white border-none hover:bg-[#d83818] bg-[#FF3811] py-2 px-5">
                Discover More
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-[#FF3811] hover:border-none">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 transform flex gap-2 justify-end">
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] text-white border-[#FF3811]">
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] text-white border-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl w-full h-full flex items-center text-white bg-gradient-to-r from-[#151515] to-[#78787800]">
          <div className="space-y-8 w-2/6 pl-8">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn text-white border-none hover:bg-[#d83818] bg-[#FF3811] py-2 px-5">
                Discover More
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-[#FF3811] hover:border-none">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 transform flex gap-2 justify-end">
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] text-white border-[#FF3811]">
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] text-white border-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl w-full h-full flex items-center text-white bg-gradient-to-r from-[#151515] to-[#78787800]">
          <div className="space-y-8 w-2/6 pl-8">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn text-white border-none hover:bg-[#d83818] bg-[#FF3811] py-2 px-5">
                Discover More
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-[#FF3811] hover:border-none">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 transform flex gap-2 justify-end">
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] text-white border-[#FF3811]">
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] text-white border-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full">
       <img
          src={img4}
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl w-full h-full flex items-center text-white bg-gradient-to-r from-[#151515] to-[#78787800]">
          <div className="space-y-8 w-2/6 pl-8">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn text-white border-none hover:bg-[#d83818] bg-[#FF3811] py-2 px-5">
                Discover More
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-[#FF3811] hover:border-none">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 transform flex gap-2 justify-end">
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] text-white border-[#FF3811]">
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] text-white border-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
