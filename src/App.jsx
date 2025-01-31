import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  //state of nav bar in mobile view
  const [openNav, setOpenNav] = useState(true);

  const mode = useSelector((state) => state.mode.mode);

  return (
    <>
      <div
        className={`block sm:flex h-full w-[100%] ${
          mode ? "bg-[#fafafe] text-[#272727]" : "bg-[#0E0C18] text-white"
        } relative overflow-scroll no-scrollbar`}
      >
        <SideBar openNav={openNav} setOpenNav={setOpenNav} />

        <div className="sm:w-[95%] h-screen">
          <div className=" xl:mr-15 h-full">
            {/* Header */}
            <div
              className={`h-18 w-full p-6 ${
                mode
                  ? "bg-white border-[#F5F3FB]"
                  : "bg-[#1C1A24] border-[#282632]"
              } justify-between flex items-center fixed sm:static z-11  border-b-3  `}
            >
              <button
                onClick={() => setOpenNav(!openNav)}
                className="sm:hidden "
              >
                <img
                  src="ThreeDot.svg"
                  alt="button"
                  className="p-1 h-8 aspect-square rounded-lg z-15 bg-gray-300 "
                />
              </button>
              <h1 className="font-[Raleway] font-bold  text-[#5C5C5C] text-2xl">
                Dashboard
              </h1>
              <div className="flex items-center  gap-4 mr-[5%]">
                <img src="/bail.svg" alt="bail" className="h-6 w-6" />
                <img
                  src="/avatar.png"
                  alt="avatar"
                  className="w-8 h-8 rounded-[2px] object-cover"
                />

                <h3 className="text-[#959595] hidden sm:block font-medium">
                  Rowena Ravenclaw
                </h3>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
