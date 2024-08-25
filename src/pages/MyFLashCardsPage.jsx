import { useSelector } from "react-redux";
import FlashcardComponent from "../components/FlashcardComponent/FlashcardComponent";
import { Link } from "react-router-dom";
const MyFlashCardsPage = () => {
  const flashcards = useSelector((state) => state.allFlashCards);
  return (
    // the div below has condtional classnames for centering the no flash cards ui elements
    <div
      className={
        flashcards.length > 0
          ? "mb-10 mt-[5rem] grid w-full grid-cols-1 place-items-center gap-2 place-self-center px-5 md:gap-10 md:px-10 lg:grid-cols-2 lg:gap-14 lg:px-32 xl:grid-cols-3 xl:gap-x-48 xl:gap-y-10"
          : "mb-10 mt-[5rem] grid w-full grid-cols-1 place-items-center gap-2 place-self-center px-5 md:gap-10 md:px-10 lg:grid-cols-1 lg:gap-14 lg:px-32 xl:grid-cols-1 xl:gap-x-10 xl:gap-y-10"
      }
    >
      <>
        {flashcards.length > 0 ? ( // to render all the flash Cards from local storage as well as newly added cards using redux store
          flashcards.map((flashCard) => {
            return (
              <FlashcardComponent
                key={flashCard.id}
                groupTopic={flashCard?.GroupData.group}
                groupDesc={flashCard?.GroupData.groupdesc}
                groupImage={flashCard?.GroupData.grpimage}
                termsData={flashCard?.TermsData}
                id={flashCard?.id}
              />
            );
          })
        ) : (
          // when user has no flashcards created yet
          <>
            <h1 className="text-md sm:text-xl lg:text-2xl place-self-center font-bold">
              You Do Not Have Any Flash Cards Yet
            </h1>
            <button className="text-xl mt-10 place-self-center rounded-md bg-red-600 p-2 font-semibold text-white">
              <Link to={"/"}>Create a new one?</Link>
            </button>
          </>
        )}
      </>
    </div>
  );
};

export default MyFlashCardsPage;
