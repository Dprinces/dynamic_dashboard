import PropTypes from "prop-types";
import { FaMoon, FaSun } from "react-icons/fa";
import { BiAlignLeft } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const Header = ({
  darkMode,
  toggleDarkMode,
  toggleSidebar,
  toggleDownload,
}) => {
  return (
    <nav className="fixed top-0 w-full  bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-80">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            {/* <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleSidebar}
            >
              <BiAlignLeft className="text-2xl text-gray-500 dark:text-gray-300" />
            </button> */}

            <a href="#" className="flex ms-2 md:me-24">
              <MdSpaceDashboard className="h-8 me-3 text-xl text-violet-500" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Reports
              </span>
            </a>
          </div>

          <button
            className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-2"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          <a href="#" className="flex ms-2">
            <button
            className= "flex flex-wrap dark:bg-slate-50 dark:text-slate-700 rounded-full p-2 md:me-2"
            onClick={toggleDownload}
          >  
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Download</span>
            <FaDownload className="h-8 me-3 text-xl text-violet-500" />
          </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

// Add PropTypes validation
Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  toggleDownload: PropTypes.func.isRequired,
};

export default Header;
