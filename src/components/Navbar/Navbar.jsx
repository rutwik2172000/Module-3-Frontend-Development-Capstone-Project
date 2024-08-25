import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation(); // function to get the current path and update the active navbar link color accorindgly
  let location = pathname?.split("/")[1];
  const classes = (here) => {
    let classname = "";
    if (!location) location = "home";
    if (here === location) {
      classname +=
        "py-2 text-[#cb1313] border-4 z-1 rounded relative border-b-[#cb1313] border-[transparent] ";
    } else {
      classname += "py-2 text-gray-600 border-4 border-transparent";
    }

    return classname;
  };
  return (
    <div className="fixed top-0 z-40 w-full">
      <div className=" flex items-center justify-start bg-white px-10 py-3 shadow-md">
        <div className="rounded-sm bg-[#cb1313]  p-1 text-2xl font-bold text-white">
          AL
        </div>
        <div className="text-2xl font-bold">maBetter</div>
      </div>
      <div className="bg-[#f5f2ed] px-5 pb-4 pt-10 md:px-20 lg:px-32">
        <h1 className="mb-7 text-2xl font-bold xl:text-3xl">
          Create Flashcard
        </h1>
        <ul className=" flex list-none gap-4 md:gap-10">
          <li>
            <NavLink
              className={`${classes("home")} font-semibold xl:text-xl`}
              to={"/"}
            >
              Create New
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${classes("myflashcard")} font-semibold xl:text-xl`}
              to={"/myflashcard"}
            >
              My Flashcard
            </NavLink>
          </li>
        </ul>
        <div className="relative z-0 mt-2 h-[2px] w-full bg-gray-400 opacity-50" />
      </div>
    </div>
  );
};

export default Navbar;
