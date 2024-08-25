/* eslint-disable react/prop-types */
import { FaShare } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { BsPrinter } from "react-icons/bs";
import { useReactToPrint } from "react-to-print";
import { useState } from "react";
import CopiedTextPopup from "../CopiedTextPopUp/CopiedTextPopup";
const ViewCardShare = ({ pdfRef }) => {
  const [isCopied, setIsCopied] = useState(false);

  // this is to implement the donwload pdf and print  functionality using useRef of the TermList component
  const downloadPdf = useReactToPrint({ content: () => pdfRef.current });

  // this is to get the current location of the url for sharing
  const location = window.location.href;
  const handleCopy = () => {
    navigator.clipboard.writeText(location);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <div className="relative flex h-60  w-full flex-col  gap-4 lg:w-[20%]">
      {/* To show a pop up when clicking on share */}
      {isCopied && <CopiedTextPopup />}
      <div
        className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-white p-2 font-semibold text-gray-700 shadow-md"
        onClick={handleCopy}
      >
        <FaShare />
        <h1>Share</h1>
      </div>
      <div
        className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-white p-2 font-semibold text-gray-700 shadow-md"
        onClick={downloadPdf}
      >
        <FiDownload />
        <h1>Download</h1>
      </div>
      <div
        className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-white p-2 font-semibold text-gray-700 shadow-md"
        onClick={downloadPdf}
      >
        <BsPrinter />
        <h1>Print</h1>
      </div>
    </div>
  );
};

export default ViewCardShare;
