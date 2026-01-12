import { useRef } from "react";

import { InfoDialog } from "./InfoDialog";

export const Card = ({ entry }) => {
  const dialogRef = useRef(null);
  const openDialog = () => {
    dialogRef.current?.showModal();
  };
  const closeDialog = () => {
    dialogRef.current?.close();
  };
  const formattedDate = new Date(
    entry.date.replace(/\./g, "-")
  ).toLocaleDateString("en-US", {
    weekday: "short", // "Thu"
    month: "short", // "Jan"
    day: "numeric", // "15"
    year: "numeric", // "2026"
  });
  return (
    <>
      <div className="group bg-white rounded-lg overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        {/*  Wrap both in a relative container with overflow-hidden for the zoom effect */}
        <div className="relative w-full h-56 overflow-hidden rounded-t-lg group">
          {/*  Position the date box absolutely */}
          <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-2 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <p className="text-sm font-medium text-gray-700 flex items-center">
              <i class="fa-regular fa-calendar text-purple-600 pr-2"></i>
              {formattedDate}
            </p>
          </div>
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={
              entry.image ||
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            }
            alt={entry.title}
          />
        </div>

        <div className="px-4 py-6 group">
          <p className="text-2xl font-bold pb-3 border-b border-gray-200 transition-colors duration-300 group-hover:text-purple-600">
            {entry.title}
          </p>
          <div className="flex items-center justify-between py-3">
            <p>{entry.date}</p>
            <button
              onClick={openDialog}
              className="flex items-center  text-purple-500 cursor-pointer"
            >
              Read more <i className="fa-solid fa-angle-right pl-1"></i>
            </button>
            <InfoDialog
              ref={dialogRef}
              onClose={closeDialog}
              entry={entry}
            ></InfoDialog>
          </div>
        </div>
      </div>
    </>
  );
};
