import { useRef } from "react";
import { AddDiaryEntryButton } from "../componets/ui/AddDiaryEntryButton";
import { Dialog } from "../componets/ui/Dialog";

export const HomePage = () => {
  const dialogRef = useRef(null);
  const openDialog = () => {
    dialogRef.current?.showModal();
  };
  const closeDialog = () => {
    dialogRef.current?.close();
  };
  return (
    <section className="max-w-7xl py-4 px-4 lg:px-8 mx-auto">
      <h1 className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center text-2xl font-bold pb-1 pt-3 sm:text-left  sm:text-5xl ">
        My Diary
        <i class="fa-solid fa-star pl-3 text-2xl"></i>
      </h1>

      <div className=" text-center  sm:flex items-center justify-between">
        <p className="text-center sm:text-left">
          Capture your daily moments and memories
        </p>
        <AddDiaryEntryButton openDialog={openDialog} />
        <Dialog ref={dialogRef} onClose={closeDialog} />
      </div>
    </section>
  );
};
