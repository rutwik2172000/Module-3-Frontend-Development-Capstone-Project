/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import ImageModal from "../ImageModal/ImageModal";
const ViewCardMain = ({ activeIndex, setActiveIndex, viewCardTerms }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const doesLineBreakOrSpacesExist =
    viewCardTerms[activeIndex].definition.search(/[\s\n]/gi);

  const lineBreakFunction = (string) => {
    let newString = "";
    //this string will be returned with linebreaks after each 10 characters
    for (const [index, char] of string.split("").entries()) {
      // logic to implement linebreaks after each 10 characters
      if (index % 10 === 0 && index !== 0) {
        newString += ` ${char}`;
      } else {
        newString += char;
      }
    }
    return newString;
  };
  return (
    <div
      className={
        viewCardTerms[activeIndex].image // if there is no image then the full container is taken by text elements
          ? "relative mb-10 flex h-fit min-h-[10rem] w-full flex-shrink flex-col rounded-md bg-white px-5 py-3 shadow-md lg:min-h-[30rem] lg:w-9/12 lg:flex-row lg:items-center lg:justify-around"
          : "relative mb-10 flex h-fit min-h-[10rem] w-full flex-shrink flex-col rounded-md bg-white px-5 py-3 shadow-md lg:min-h-[30rem] lg:w-9/12 lg:flex-row lg:items-center lg:justify-center"
      }
    >
      {
        // to show the zoomed image on large devices
        isModalOpen && (
          <ImageModal
            setIsModalOpen={setIsModalOpen}
            term={viewCardTerms[activeIndex].term}
            image={viewCardTerms[activeIndex].image}
            isModalOpen={isModalOpen}
          />
        )
      }
      <img
        loading="lazy"
        onClick={
          // to zoom in pictures on large devices where pictures appear small
          () => setIsModalOpen(true)
        }
        src={
          viewCardTerms[activeIndex].image && viewCardTerms[activeIndex].image
        }
        alt=""
        className={
          (viewCardTerms[activeIndex].image &&
            "mb-4  w-full cursor-zoom-in rounded-md object-fill  lg:mb-0 lg:w-1/3") ||
          "hidden"
        }
      />
      <div
        className={
          viewCardTerms[activeIndex].image
            ? "flex flex-col gap-10 lg:w-1/3"
            : "flex flex-col gap-10 p-4 lg:w-full"
        }
      >
        <h2 className="text-lg font-bold first-letter:uppercase">
          {viewCardTerms[activeIndex].term}
        </h2>
        {doesLineBreakOrSpacesExist !== -1 ? (
          <p className=" text-sm text-gray-600 ">
            {viewCardTerms[activeIndex].definition}
          </p>
        ) : (
          <div>
            <p className="text-sm text-gray-600">
              {lineBreakFunction(viewCardTerms[activeIndex].definition)}
            </p>
          </div>
        )}
      </div>
      {/* this div is for implenting pagination*/}
      <div className="absolute bottom-[-2.5rem] left-1/2 flex translate-x-[-50%] items-center gap-2">
        <FaLessThan
          className={
            activeIndex === 0
              ? "cursor-pointer text-gray-500"
              : "cursor-pointer text-gray-800"
          }
          onClick={() => {
            if (activeIndex !== 0) {
              // to move towards the previous page of terms
              setActiveIndex(activeIndex - 1);
            }
          }}
        />
        <span className="text-black1  text-xl font-bold">
          {`${activeIndex + 1} / ${viewCardTerms.length}`}
        </span>
        <FaGreaterThan
          className={
            activeIndex === viewCardTerms.length - 1
              ? "cursor-pointer text-gray-500"
              : "cursor-pointer text-gray-800"
          }
          onClick={() => {
            if (activeIndex !== viewCardTerms.length - 1) {
              // to move towards the forward page of terms
              setActiveIndex(activeIndex + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default ViewCardMain;
