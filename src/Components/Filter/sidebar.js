import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import React from "react";

function SlideRight() {
  let activeSlide = document.querySelector(".slide");
  let rightarrow = document.querySelector(".RightArrow");
  let leftarrow = document.querySelector(".LefttArrow");
  rightarrow.classList.add("hidden");
  leftarrow.classList.remove("hidden");
  activeSlide.classList.remove("-translate-x-full");
  activeSlide.classList.add("translate-x-0");
}

function SlideLeft() {
  let activeSlide = document.querySelector(".slide.translate-x-0");
  let rightarrow = document.querySelector(".RightArrow");
  let leftarrow = document.querySelector(".LefttArrow");
  rightarrow.classList.remove("hidden");
  leftarrow.classList.add("hidden");
  activeSlide.classList.remove("translate-x-0");
  activeSlide.classList.add("-translate-x-full");
}

export default function Sidebar() {
  return (
    <>
      <div className="transition-all ease-in-out duration-1000 transform -translate-x-full bg-gray-100 slide my-2 fixed z-50">
        <div className="translate-x-96 md:translate-x-80 z-50 absolute my-16">
          <button className="RightArrow " onClick={SlideRight}>
            <ArrowRightIcon className="h-8 w-8" />
          </button>
          <button className="LefttArrow hidden" onClick={SlideLeft}>
            <ArrowLeftIcon className="h-8 w-8" />
          </button>
        </div>
        <div className="px-8 md:px-1 my-6">
          <div className="h-[calc(100vh-4rem)] w-full max-w-[20rem] bg-gray-100 py-4">
            <div className="mb-0 p-4 text-lg bg-black text-white">
              Journey Board
            </div>
            <div className="w-full flex flex-col">
              <li className="text-lg font-semibold">
                Explore the world of management
              </li>

              <li>Technical Project Management</li>
              <li>Threadbuild</li>
              <li>Structure your pointers</li>
              <li>4SA Method</li>
            </div>
          </div>
        </div>
      </div>
      <div className="transition-all ease-in-out duration-1000 transform translate-x-0 slide my-2 absolute z-50 backdrop-blur-sm md:relative"></div>
    </>
  );
}
