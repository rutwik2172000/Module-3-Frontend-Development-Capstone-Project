import { useParams } from "react-router-dom";
import ViewCardHeading from "../components/ViewCard/ViewCardHeading";
import ViewCardTerms from "../components/ViewCard/ViewCardTerms";

const FlashCardDetailsPage = () => {
  const { details: flashCardID } = useParams();
  const viewCardDetails = JSON.parse(localStorage.getItem("allFlashCardData"));
  const viewCard = viewCardDetails?.find(
    (viewCard) => viewCard.id === flashCardID,
  ); // to find the card and display it's details from localStorage

  return (
    <div className="w-full px-5 md:px-10 lg:px-32">
      <ViewCardHeading
        viewCardHeading={viewCard?.GroupData.group}
        viewCardDescription={viewCard?.GroupData.groupdesc}
      />
      <ViewCardTerms viewCardTerms={viewCard?.TermsData} />
    </div>
  );
};

export default FlashCardDetailsPage;
