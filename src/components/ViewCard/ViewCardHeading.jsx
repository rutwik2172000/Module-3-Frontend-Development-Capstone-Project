/* eslint-disable react/prop-types */
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const ViewCardHeading = ({ viewCardHeading, viewCardDescription }) => {
  const doesLineBreakOrSpacesExist = viewCardDescription.search(/[\s\n]/gi);

  const lineBreakFunction = (string) => {
    let newString = "";
    //this string will be returned with linebreaks after each 50 characters
    for (const [index, char] of string.split("").entries()) {
      // logic to implement linebreaks after each 50 characters
      if (index % 10 === 0 && index !== 0) {
        newString += ` ${char}`;
      } else {
        newString += char;
      }
    }
    return newString;
  };

  return (
    <div className="mb-10 flex items-baseline gap-4 sm:ml-10 lg:ml-0">
      <Link to={"/myflashcard"}>
        <IoMdArrowRoundBack className="text-xl cursor-pointer text-gray-700" />
      </Link>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold first-letter:uppercase">
          {viewCardHeading}
        </h1>
        {
          /*  if the paragraph is very long and doesn't contain spaces or line breaks then it is diplayed 
          with line breaks else it's displayed normally to avoid random paragraphs spoiling the responsivenes */
          doesLineBreakOrSpacesExist !== -1 ? (
            <h4 className=" text-gray-500">{viewCardDescription}</h4>
          ) : (
            <h4 className="inline-block max-w-full overflow-hidden">
              {lineBreakFunction(viewCardDescription)}
            </h4>
          )
        }
      </div>
    </div>
  );
};

export default ViewCardHeading;
