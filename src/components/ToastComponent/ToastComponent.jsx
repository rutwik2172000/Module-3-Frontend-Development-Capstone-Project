/* eslint-disable react/prop-types */
import { BsCheckCircle } from "react-icons/bs";

const Toast = ({ fn, toastClass }) => {
  return (
    <div
      data-testid="toast-dataid"
      className={`${toastClass} fixed left-1/2 top-2 z-50 w-72 -translate-x-1/2 transform space-y-4 rounded-md bg-blue-600 p-5 text-white transition-all duration-1000 ease-in-out sm:w-96`}
    >
      <div>
        <h3 className="mb-2 flex flex-col items-center gap-2 text-xl font-semibold sm:flex-row">
          <i className="text-2xl text-blue-200">
            <BsCheckCircle />
          </i>
          Your Flashcard is created.
        </h3>
        <p className="text-blue-200">
          Go to My Flashcard tab and check your all of your created flashcards.
        </p>
      </div>
      <div className="text-right">
        <button
          type="button"
          onClick={fn}
          className="min-w-max rounded-md border-2 border-blue-300 px-4 py-1 font-semibold text-blue-200 transition-all hover:border-blue-700 hover:bg-blue-700 active:animate-ping"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Toast;
