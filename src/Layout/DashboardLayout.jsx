import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSideNavOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  function toggleSideNav() {
    setIsSideNavOpen(!isSideNavOpen);
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <button
        onClick={toggleSideNav}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-full shadow-lg focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-white shadow-lg transition-transform transform ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-20 bg-teal-600">
            <Link to="/">
              <p>User Dashboard</p>
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto bg-indigo-600  font-semibold ">
            <ul className="space-y-2 p-4">
              <li>
                <Link
                  onClick={() => setIsSideNavOpen(false)}
                  to="/dashboard/admin"
                  className="flex items-center p-3 text-gray-700 hover:bg-teal-100 rounded-lg transition"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3 text-white">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsSideNavOpen(false)}
                  to="/dashboard/admin/all-member"
                  className="flex items-center p-3 text-gray-700 hover:bg-teal-100 rounded-lg transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                  <span className="flex-1 ml-3 text-white">All Members</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsSideNavOpen(false)}
                  to="/dashboard/admin/verification"
                  className="flex items-center p-3 text-gray-700 hover:bg-teal-100 rounded-lg transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <span className="flex-1 ml-3 text-white">Verification</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsSideNavOpen(false)}
                  to="/dashboard/admin/transactions"
                  className="flex items-center p-3 text-gray-700 hover:bg-teal-100 rounded-lg transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                  <span className="flex-1 ml-3 text-white">
                    All Transactions
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsSideNavOpen(false)}
                  to="/dashboard/admin/LoanApplication"
                  className="flex items-center p-3 text-gray-700 hover:bg-teal-100 rounded-lg transition"
                >
                  <FaUserCog className="w-6 h-6" />
                  <span className="flex-1 ml-3 text-white">
                    Loan Application
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsSideNavOpen(false)}
                  to="/dashboard/admin/settings"
                  className="flex items-center p-3 text-gray-700 hover:bg-teal-100 rounded-lg transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="flex-1 ml-3 text-white">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex-1 md:ml-64">
        <Navbar />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
