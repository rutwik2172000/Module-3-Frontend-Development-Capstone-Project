/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import ViewCardShare from "./ViewCardShare";
import ViewCardMain from "./ViewCardMain";
import TermList from "../TermList/TermList";

const ViewCardTerms = ({ viewCardTerms }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pdfRef = useRef(null);
  return (
    // main div for setting the position of the children elements according to the screen size
    <div className=" flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
      {/* For page navigation based upon topics */}
      <div className="flex  w-full flex-col  items-center justify-center gap-5 overflow-x-scroll rounded-md bg-white px-4 pb-3 pt-6  shadow-md lg:min-h-[30rem] lg:w-2/6 lg:flex-col lg:items-center lg:justify-start lg:overflow-y-scroll  xl:w-1/6">
        <h1 className="text-lg lg:text-xl mb-0 place-self-start font-semibold lg:mb-3 lg:block">
          Flashcards
        </h1>
        <div className=" mb-0 w-full border-t-2 border-t-gray-200 lg:mb-5 lg:block"></div>
        <div className="flex  items-center justify-start gap-4 overflow-x-scroll  lg:flex-col">
          {viewCardTerms.map((term, index) => {
            // for displaying the topic of all the terms
            return (
              <button
                onClick={() => {
                  setActiveIndex(index);
                }}
                className={
                  activeIndex === index
                    ? "text-sm lg:text-xl min-w-fit translate-y-[-5%] cursor-pointer rounded-lg bg-slate-200 p-2 font-semibold text-blue-600 first-letter:uppercase lg:bg-transparent lg:p-0"
                    : "text-sm lg:text-xl min-w-fit translate-y-[-5%] cursor-pointer rounded-lg bg-slate-200 p-2 font-semibold first-letter:uppercase lg:bg-transparent lg:p-0"
                }
                key={index}
              >
                {term.term}
              </button>
            );
          })}
        </div>
      </div>
      {/* this div is for displaying the whole contents including image term topic and definition */}
      <ViewCardMain
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        viewCardTerms={viewCardTerms}
      />
      {/* this is a hidden element used to implement download and print functionality */}
      <TermList forwardedRef={pdfRef} />
      {/* this is for implementing share download features */}
      <ViewCardShare pdfRef={pdfRef} />
    </div>
  );
};

export default ViewCardTerms;
