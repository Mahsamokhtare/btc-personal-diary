import { useRef, useState } from "react";
import { AddDiaryEntryButton } from "../componets/ui/AddDiaryEntryButton";
import { FormDialog } from "../componets/ui/FormDialog";
import { Card } from "../componets/ui/Card";

export const HomePage = () => {
  const dialogRef = useRef(null);
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("diaryEntries");
    return saved ? JSON.parse(saved) : [];
  });
  const addEntry = (newEntry) => {
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
  };
  const openDialog = () => {
    dialogRef.current?.showModal();
  };
  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <div className="bg-[#faf3ff] h-screen">
      <section className="max-w-7xl py-4 px-4 lg:px-8 mx-auto">
        <header className="flex  justify-between pb-16">
          <div className="flex items-center">
            <div className="px-6 py-6 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 ">
              <i className="fa-solid fa-book-open text-white text-3xl"></i>
            </div>
            <div className="pl-3">
              <h1 className=" bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent text-center text-lg sm:text-6xl font-bold pb-1 pt-3 sm:text-left">
                My Diary
              </h1>
              <p className="text-gray-600 text-lg text-center sm:text-left">
                Capture your daily moments and memories
              </p>
            </div>
          </div>
          <div className=" text-center   sm:flex items-center justify-between">
            <AddDiaryEntryButton
              openDialog={openDialog}
              entry={"Add new Entry"}
            />
            <FormDialog
              ref={dialogRef}
              onClose={closeDialog}
              onAddEntry={addEntry}
            />
          </div>
        </header>

        {entries.length === 0 ? (
          // 1. SHOW THIS IF EMPTY
          <div className="flex items-center justify-center mt-10">
            <div className="bg-white rounded-xl py-16 px-16 text-center shadow-2xl">
              <i className="fa-solid fa-book-open text-5xl pb-8 text-purple-600"></i>
              <h1 className="text-gray-700 text-4xl pb-5">No entries yet</h1>
              <p className="pb-8 text-gray-500">
                Start your journey by adding your first diary entry
              </p>
              <div className="flex items-center justify-center">
                <AddDiaryEntryButton
                  openDialog={openDialog}
                  entry={"Create your first Entry"}
                />
              </div>
            </div>
          </div>
        ) : (
          // 2. SHOW THIS IF ENTRIES EXIST
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
            {entries.map((item) => (
              <Card key={item.id} entry={item}></Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
