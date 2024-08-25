/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { TbTrashX } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { deleteFlashCard } from "../../Redux/Slices/AllFlashcards";
const FlashcardComponent = ({
  groupTopic,
  groupDesc,
  groupImage,
  termsData,
  id,
}) => {
  const dispatch = useDispatch();
  const doesLineBreakOrSpacesExist = groupDesc.search(/[\s\n]/gi);
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
    <div className="relative  z-0 mx-auto my-10 flex h-5/6 w-full min-w-64 flex-col justify-between rounded-md border border-gray-300 bg-white p-5 pt-8 shadow-md sm:mx-0 sm:w-5/6 sm:min-w-96 lg:w-11/12">
      <img
        src={groupImage ?? "https://placehold.co/400"}
        alt=""
        className="absolute left-1/2 top-0 aspect-square h-14 w-14  translate-x-[-50%] translate-y-[-50%] rounded-full object-cover "
      />

      <h1 className="m-4 text-center font-black first-letter:uppercase">
        {groupTopic}
      </h1>

      {
        /*  if the paragraph is very long and doesn't contain spaces or line breaks then it is diplayed 
          with line breaks else it's displayed normally to avoid random paragraphs spoiling the responsivenes */
        doesLineBreakOrSpacesExist !== -1 ? (
          <p className="max-w-full place-self-center overflow-hidden">
            {groupDesc.length > 78
              ? `${groupDesc.slice(0, 78)} ...`
              : groupDesc}
          </p>
        ) : (
          <p className="max-w-full place-self-center overflow-hidden">
            {lineBreakFunction(groupDesc).length > 78
              ? `${lineBreakFunction(groupDesc.slice(0, 78))} ...`
              : lineBreakFunction(groupDesc)}
          </p>
        )
      }

      <p className="m-4 text-center font-semibold">{`${termsData.length} Cards`}</p>

      <Link to={`/${id}`}>
        <button className=" text-xl w-full place-self-center rounded-md border-2 border-red-600 bg-transparent p-1  font-bold text-red-500 transition-all  duration-300 ease-in-out  hover:bg-red-600 hover:text-white">
          View Cards
        </button>
      </Link>
      <TbTrashX
        size={"1.5rem"}
        className="absolute right-2 top-4 cursor-pointer hover:text-blue-700"
        onClick={() => {
          // to implement delete flashcard functionality
          const allFlashcards = JSON.parse(
            localStorage.getItem("allFlashCardData"),
          );
          const deletedFlashCardData = allFlashcards.filter(
            (flashCard) => flashCard.id !== id,
          );
          localStorage.setItem(
            "allFlashCardData",
            JSON.stringify(deletedFlashCardData),
          );
          dispatch(deleteFlashCard(id));
        }}
      />
    </div>
  );
};
export default FlashcardComponent;
