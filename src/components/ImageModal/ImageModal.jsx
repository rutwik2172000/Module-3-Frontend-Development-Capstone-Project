import { IoCloseSharp } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
const ImageModal = ({ setIsModalOpen, image, term, isModalOpen }) => {
  return (
    <div
      className={
        isModalOpen
          ? "fixed left-1/2 top-1/2 z-30 h-screen w-full translate-x-[-50%] translate-y-[-50%]"
          : "hidden"
      }
      onClick={() => setIsModalOpen(false)}
    >
      <div className="absolute left-1/2 top-1/2 z-50 hidden h-1/2  w-1/2 translate-x-[-52%] translate-y-[-20%] lg:block">
        <img src={image} alt={term} className="h-full w-full " />
        <IoCloseSharp
          className="text-2xl absolute right-[-2rem] top-[-3rem] cursor-pointer fill-black"
          size={"2rem"}
          onClick={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default ImageModal;
