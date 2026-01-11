import { forwardRef } from "react";
import { DiaryForm } from "../DiaryForm";

export const FormDialog = forwardRef(function Dialog(
  { onClose, onAddEntry },
  ref
) {
  const handleBackdropClick = (e) => {
    // Close dialog only if clicking the backdrop, not the dialog itself
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <dialog
        ref={ref}
        onClose={onClose}
        onClick={handleBackdropClick}
        className="fixed w-[800px] h-[800px] rounded-lg p-0 bg-white shadow-2xl"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
        }}
      >
        <div className="w-full h-full flex flex-col">
          <header className="flex justify-between items-center bg-[#f6f4ff] px-10 py-10 ">
            <p className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent font-semibold text-3xl">
              Add new Entry
            </p>
            <button onClick={onClose} className="text-lg hover:text-gray-600">
              <i className="cursor-pointer fa-solid fa-xmark text-2xl text-gray-400"></i>
            </button>
          </header>
          <div className="flex-1 overflow-y-auto p-10">
            <DiaryForm onClose={onClose} onAddEntry={onAddEntry}></DiaryForm>
          </div>
        </div>
      </dialog>
    </>
  );
});
