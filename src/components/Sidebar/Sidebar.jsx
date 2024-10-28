import PropTypes from "prop-types";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 pb-4 overflow-auto">
        <ul className="space-y-5 font-medium">
          <li className="mb-[2rem]">
            <a
              href="#"
              className="flex items-center p-3 text-gray-900 rounded-md dark:text-white hover:bg-[#5577ce] dark:hover:bg-gray-700 group"
            >
              <div
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#1b59f8] dark:group-hover:text-white"
                aria-hidden="true"
              >
                {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="font-size: 1.4rem;">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
                 </svg> */}
              </div>
              <span className="ms-3">Report</span>
            </a>
          </li>
          <li className="mb-[2rem]">
            <a
              href="#"
              className="flex items-center p-3 text-gray-900 rounded-md dark:text-white hover:bg-[#5577ce] dark:hover:bg-gray-700 group"
            >
              <div
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#1b59f8] dark:group-hover:text-white"
                aria-hidden="true"
              >
                {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="font-size: 1.4rem;">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
              </svg> */}
              </div>
              <span className="ms-3">Library</span>
            </a>
          </li>
          <li className="mb-[2rem]">
            <a
              href="#"
              className="flex items-center p-3 text-gray-900 rounded-md dark:text-white hover:bg-[#5577ce] dark:hover:bg-gray-700 group"
            >
              <div
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#1b59f8] dark:group-hover:text-white"
                aria-hidden="true"
              >
                {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="font-size: 1.4rem;">
                <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
               </svg> */}
              </div>
              <span className="ms-3">People</span>
            </a>
          </li>
          <li className="mb-[2rem]">
            <a
              href="#"
              className="flex items-center p-3 text-gray-900 rounded-md dark:text-white hover:bg-[#5577ce] dark:hover:bg-gray-700 group"
            >
              <div
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#1b59f8] dark:group-hover:text-white"
                aria-hidden="true"
              >
                {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="font-size: 1.4rem;">
                <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM117.66,149.66l-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L80,164.69l26.34-26.35a8,8,0,0,1,11.32,11.32Zm0-64-32,32a8,8,0,0,1-11.32,0l-16-16A8,8,0,0,1,69.66,90.34L80,100.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM192,168H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-64H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z"></path>
                </svg> */}
              </div>
              <span className="ms-3">Activities</span>
            </a>
          </li>
          <div className="pt-4 mt-4  space-y-2 font-medium  border-gray-600 dark:border-gray-700">
            <span className="flex-1 ms-3 whitespace-nowrap text-xl ">
              Support
            </span>
          </div>
          <li className="mb-[2rem]">
            <a
              href="#"
              className="flex items-center p-3 text-gray-900 rounded-md dark:text-white hover:bg-[#5577ce] dark:hover:bg-gray-700 group"
            >
              <div
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#1b59f8] dark:group-hover:text-white"
                aria-hidden="true"
              >
                {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="font-size: 1.4rem;">
              <path d="M288 464h-64a16 16 0 0 0 0 32h64a16 16 0 0 0 0-32zm16-48h-96a16 16 0 0 0 0 32h96a16 16 0 0 0 0-32zm65.42-353.31C339.35 32.58 299.07 16 256 16A159.62 159.62 0 0 0 96 176c0 46.62 17.87 90.23 49 119.64l4.36 4.09C167.37 316.57 192 339.64 192 360v24a16 16 0 0 0 16 16h24a8 8 0 0 0 8-8V274.82a8 8 0 0 0-5.13-7.47A130.73 130.73 0 0 1 208.71 253a16 16 0 1 1 18.58-26c7.4 5.24 21.65 13 28.71 13s21.31-7.78 28.73-13a16 16 0 0 1 18.56 26 130.73 130.73 0 0 1-26.16 14.32 8 8 0 0 0-5.13 7.47V392a8 8 0 0 0 8 8h24a16 16 0 0 0 16-16v-24c0-19.88 24.36-42.93 42.15-59.77l4.91-4.66C399.08 265 416 223.61 416 176a159.16 159.16 0 0 0-46.58-113.31z"></path>
               </svg>  */}
              </div>
              <span className="ms-3">Get Started</span>
            </a>
          </li>
          <li className="mb-[2rem]">
            <a
              href="#"
              className="flex items-center p-3 text-gray-900 rounded-md dark:text-white hover:bg-[#5577ce] dark:hover:bg-gray-700 group"
            >
              <div
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#1b59f8] dark:group-hover:text-white"
                aria-hidden="true"
              >
                {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="font-size: 1.4rem;">
              <path d="M288 464h-64a16 16 0 0 0 0 32h64a16 16 0 0 0 0-32zm16-48h-96a16 16 0 0 0 0 32h96a16 16 0 0 0 0-32zm65.42-353.31C339.35 32.58 299.07 16 256 16A159.62 159.62 0 0 0 96 176c0 46.62 17.87 90.23 49 119.64l4.36 4.09C167.37 316.57 192 339.64 192 360v24a16 16 0 0 0 16 16h24a8 8 0 0 0 8-8V274.82a8 8 0 0 0-5.13-7.47A130.73 130.73 0 0 1 208.71 253a16 16 0 1 1 18.58-26c7.4 5.24 21.65 13 28.71 13s21.31-7.78 28.73-13a16 16 0 0 1 18.56 26 130.73 130.73 0 0 1-26.16 14.32 8 8 0 0 0-5.13 7.47V392a8 8 0 0 0 8 8h24a16 16 0 0 0 16-16v-24c0-19.88 24.36-42.93 42.15-59.77l4.91-4.66C399.08 265 416 223.61 416 176a159.16 159.16 0 0 0-46.58-113.31z"></path>
               </svg>  */}
              </div>
              <span className="ms-3">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
