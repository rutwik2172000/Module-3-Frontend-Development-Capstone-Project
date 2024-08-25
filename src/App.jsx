import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { populateFlashCards } from "./Redux/Slices/AllFlashcards";
import CreateFlashCardPage from "./pages/CreateFlashCardsPage";
import MyFlashCardsPage from "./pages/MyFLashCardsPage";
import FlashCardDetailsPage from "./pages/FlashCardDetailsPage";
const App = () => {
  const dispatch = useDispatch();
  const allFlashCardData = JSON.parse(localStorage.getItem("allFlashCardData")); // to get the flash card data from localStorage
  useEffect(() => {
    allFlashCardData && dispatch(populateFlashCards(allFlashCardData));
    // to update the flash card data in redux store every time a change in localStorage is made for the flash card data
  }, [allFlashCardData]);

  return (
    <div className="App flex min-h-screen w-full  flex-col overflow-x-hidden bg-[#f5f2ed] font-openSans">
      <Navbar />
      <main
        style={{ marginTop: "15rem" }}
        className="grid place-items-start overflow-scroll"
      >
        <Routes>
          <Route path="/" element={<CreateFlashCardPage />} />
          <Route path="/myflashcard" element={<MyFlashCardsPage />} />
          <Route path="/:details" element={<FlashCardDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
