import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { FiPaperclip } from "react-icons/fi";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Light/Dark theme toggle
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close dropdown when clicked outside notifcation menu
  useEffect(() => {
    const closeDropdown = () => {
      if (isNotificationOpen) {
        setIsNotificationOpen(false);
      }
    };

    window.addEventListener("click", closeDropdown);

    return () => window.removeEventListener("click", closeDropdown);
  }, [isNotificationOpen]);

  return (
    <>
      {/* Main container */}
      <div className="w-full h-screen flex flex-auto flex-col bg-gray-900 items-center dark:text-white">
        {/* navbar */}
        <div className="w-full bg-white dark:bg-slate-900 flex items-center justify-between px-4 sm:px-8 py-4 shadow-md z-10">
          <div className="flex items-center">
            <div className="mr-2 sm:mr-4 pt-2">
              <svg
                width="42"
                height="50"
                viewBox="0 0 42 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#3F59FF" />
                <path
                  d="M8.3 47.7L7.45 13.55L5 13.9L4 9.5C4.93333 9.3 6.16667 9.1 7.7 8.9C9.26667 8.66666 10.9667 8.45 12.8 8.25C14.6333 8.01666 16.4333 7.83333 18.2 7.7C19.9667 7.56667 21.5333 7.5 22.9 7.5C25.4333 7.5 27.7667 8.01666 29.9 9.05C32.0333 10.0833 33.75 11.5333 35.05 13.4C36.35 15.2667 37 17.4333 37 19.9C37 22.9333 36.35 25.4667 35.05 27.5C33.75 29.5 32.0167 31 29.85 32C27.7167 33 25.3333 33.5 22.7 33.5C21.6 33.5 20.35 33.3667 18.95 33.1C17.55 32.8333 16.0667 32.35 14.5 31.65V47L8.3 47.7ZM14.5 26.9C15.2333 27.1667 16.05 27.4167 16.95 27.65C17.85 27.85 18.7167 28 19.55 28.1C20.4167 28.2 21.1 28.25 21.6 28.25C24.0333 28.25 26.0333 27.6 27.6 26.3C29.2 24.9667 30 22.9333 30 20.2C30 18.6667 29.6333 17.35 28.9 16.25C28.1667 15.15 27.2167 14.3 26.05 13.7C24.8833 13.1 23.65 12.8 22.35 12.8C21.1833 12.8 19.8833 12.8167 18.45 12.85C17.0167 12.85 15.7 12.9 14.5 13V26.9Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-lg sm:text-2xl font-bold text-blue-600 dark:text-blue-500 cursor-pointer relative group">
              Plagiarism Guard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              className={`rounded-full text-3xl flex items-center justify-center h-8 w-8 ${
                theme === "light"
                  ? "bg-slate-200 text-indigo-700"
                  : "bg-slate-600 text-white"
              }`}
              onClick={() => setTheme("light")}
            >
              <IoIosSunny></IoIosSunny>
            </button>
            <button
              className={`rounded-full text-2xl flex items-center justify-center h-8 w-8 ${
                theme === "dark"
                  ? "bg-slate-200 text-indigo-700"
                  : "bg-slate-600 text-white"
              }`}
              onClick={() => setTheme("dark")}
            >
              <IoIosMoon></IoIosMoon>
            </button>
          </div>
          <div className="flex justify-center items-center gap-4 relative">
            <button
              className="bg-slate-50 dark:bg-slate-600 rounded-full hover:bg-slate-100 dark:hover:bg-slate-500 w-8 h-8 flex justify-center items-center"
              onClick={(e) => {
                e.stopPropagation();
                setIsNotificationOpen(!isNotificationOpen);
              }}
            >
              <FaBell className="text-slate-700 dark:text-white w-5 h-5"></FaBell>
            </button>

            {/* Notification Dropdown */}
            <div
              className={`absolute right-0 top-12 w-64 sm:w-80 bg-white dark:bg-slate-700 rounded-lg shadow-lg p-3 sm:p-4 z-20 
    transform transition-all duration-300 ease-out origin-top
    ${
      isNotificationOpen
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
    }`}
            >
              <div className="flex flex-col items-center justify-center py-4 sm:py-6">
                <div className="text-gray-400 dark:text-gray-300 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 sm:h-12 sm:w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm text-center">
                  No new notifications
                </p>
              </div>
            </div>
            <img
              src="pic.jpg"
              alt="Profile Pic"
              className="rounded-full w-10 h-10 sm:block hidden"
            />
          </div>
        </div>

        {/* Body Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 px-4 sm:px-6 py-6 bg-slate-100 dark:bg-slate-800 h-full w-screen overflow-y-auto">
          {/* Main Section */}
          <div className="bg-white dark:bg-slate-700 rounded-2xl flex flex-col flex-auto h-full min-h-96 w-full lg:w-2/3 p-4 sm:p-5 shadow-md">
            {/* Text Section */}
            <textarea className="h-full resize-none mb-3 p-2 outline-none dark:bg-slate-700 dark:text-white"></textarea>

            {/* Rotating Buttons */}
            <div className="flex gap-2 sm:gap-4 justify-end items-center">
              <button className="bg-slate-50 rounded-full hover:bg-slate-200 w-10 h-10 text-2xl dark:bg-slate-600 flex justify-center items-center transition-transform duration-300 hover:rotate-[360deg] shadow-md">
                <FiPaperclip />
              </button>
              <button className="bg-slate-50 rounded-full hover:bg-slate-200 w-10 h-10 text-xl dark:bg-slate-600 flex justify-center items-center transition-transform duration-300 hover:rotate-[360deg] shadow-md">
                <FaArrowsRotate />
              </button>

              {/* Scan Button */}
              <button
                className="bg-blue-800 dark:bg-blue-600 text-white rounded-full w-20 h-8 flex justify-center items-center transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-xl z-100"
                onClick={() => {
                  setIsLoading(true);
                  // Simulate scanning process
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 5000); // 5 seconds delay
                }}
              >
                Scan
              </button>
            </div>
          </div>
          {/* Results */}
          <div className="flex flex-col lg:flex-col justify-between items-center gap-4 sm:gap-6 text-slate-700 w-full lg:w-1/3 h-full">
            {/* Readability */}
            <div className="bg-white dark:bg-slate-700 dark:text-white rounded-2xl shadow-md flex flex-row items-center py-3 sm:py-5 gap-4 w-full min-h-[5rem] sm:min-h-[8rem] px-4 sm:px-6">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-600"></div>
              <div className="flex flex-col items-start">
                <h2 className="text-xl sm:text-2xl font-bold">0/100</h2>
                <p className="text-sm sm:text-base">Readability</p>
              </div>
            </div>

            {/* AI Generated */}
            <div className="bg-white dark:bg-slate-700 dark:text-white rounded-2xl shadow-md flex flex-row items-center py-3 sm:py-5 gap-4 w-full min-h-[5rem] sm:min-h-[8rem] px-4 sm:px-6">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-600"></div>
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-bold">0/100</h2>
                <p>AI Generated</p>
              </div>
            </div>

            {/* Sources Attribution */}
            <div className="bg-white dark:bg-slate-700 dark:text-white rounded-2xl shadow-md flex flex-row items-center py-3 sm:py-5 gap-4 w-full min-h-[5rem] sm:min-h-[8rem] px-4 sm:px-6">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-600"></div>
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-bold">0/100</h2>
                <p>Sources Attribution</p>
              </div>
            </div>

            {/* Citations */}
            <div className="bg-white dark:bg-slate-700 dark:text-white rounded-2xl shadow-md flex flex-row items-center py-3 sm:py-5 gap-4 w-full min-h-[5rem] sm:min-h-[8rem] px-4 sm:px-6">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-600"></div>
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-bold">0/100</h2>
                <p>Citations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          <div className="flex flex-col items-center space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl">
            {/* Logo */}
            <svg
              width="64"
              height="76"
              viewBox="0 0 42 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <circle cx="20" cy="20" r="20" fill="#3F59FF" />
              <path
                d="M8.3 47.7L7.45 13.55L5 13.9L4 9.5C4.93333 9.3 6.16667 9.1 7.7 8.9C9.26667 8.66666 10.9667 8.45 12.8 8.25C14.6333 8.01666 16.4333 7.83333 18.2 7.7C19.9667 7.56667 21.5333 7.5 22.9 7.5C25.4333 7.5 27.7667 8.01666 29.9 9.05C32.0333 10.0833 33.75 11.5333 35.05 13.4C36.35 15.2667 37 17.4333 37 19.9C37 22.9333 36.35 25.4667 35.05 27.5C33.75 29.5 32.0167 31 29.85 32C27.7167 33 25.3333 33.5 22.7 33.5C21.6 33.5 20.35 33.3667 18.95 33.1C17.55 32.8333 16.0667 32.35 14.5 31.65V47L8.3 47.7ZM14.5 26.9C15.2333 27.1667 16.05 27.4167 16.95 27.65C17.85 27.85 18.7167 28 19.55 28.1C20.4167 28.2 21.1 28.25 21.6 28.25C24.0333 28.25 26.0333 27.6 27.6 26.3C29.2 24.9667 30 22.9333 30 20.2C30 18.6667 29.6333 17.35 28.9 16.25C28.1667 15.15 27.2167 14.3 26.05 13.7C24.8833 13.1 23.65 12.8 22.35 12.8C21.1833 12.8 19.8833 12.8167 18.45 12.85C17.0167 12.85 15.7 12.9 14.5 13V26.9Z"
                fill="white"
              />
            </svg>

            {/* Loading Animation */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            </div>

            {/* Loading Text */}
            <p className="text-slate-700 dark:text-slate-200 text-lg font-medium">
              Scanning...
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
