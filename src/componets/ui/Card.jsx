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
  return (
    <>
      <div className="group bg-white rounded-lg overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          src={
            entry.image ||
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
          }
        ></img>

        <div className="px-4 py-6">
          <p className="text-2xl font-bold pb-3 border-b border-gray-200">
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
