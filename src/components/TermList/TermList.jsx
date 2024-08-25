import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TermList = ({ forwardedRef }) => {
  // print template page

  // Get the flashcards from the redux store
  const flashcards = useSelector((state) => state.allFlashCards);

  // Get the ID from the URL params
  const { details } = useParams();
  // Check if the ID is in the flashcards array
  const flashcard = flashcards.find((item) => item.id === details);
  // If the ID is in the flashcards array, render the template
  if (flashcard) {
    return (
      <div className="hidden">
        <div
          key={flashcard.id}
          ref={forwardedRef}
          className="max-w-4xl bg-white p-4 sm:p-8"
        >
          <div className="space-y-10">
            <div className="flex flex-col items-center gap-5 sm:flex-row md:flex-row">
              <div>
                <img
                  src={flashcard.GroupData.grpimage}
                  alt="Group_image"
                  className="aspect-square w-52 rounded-md object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl text-center font-semibold sm:text-left">
                  {flashcard.GroupData.group}
                </h2>
                <p className="text-gray-600">{flashcard.GroupData.groupdesc}</p>
              </div>
            </div>

            <div>
              <ol className="flex flex-col space-y-6">
                {flashcard.TermsData.map(
                  ({ term, definition, image }, index) => (
                    <li key={index}>
                      <div className="mb-4 flex gap-3">
                        <span className="grid aspect-square h-7 w-7 place-items-center rounded-full bg-blue-500 text-white">
                          {index + 1}
                        </span>
                        <h3 className="font-semibold">{term}</h3>
                      </div>

                      <div className="text-center">
                        <div>
                          <img
                            src={image}
                            alt="Group_image"
                            className="float-left mb-2 mr-2 mt-2 aspect-square w-40 rounded-md object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-justify text-gray-600">
                            {definition}
                          </p>
                        </div>
                      </div>
                    </li>
                  ),
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If the ID is not in the flashcards array, return null
  return null;
};

export default TermList;
