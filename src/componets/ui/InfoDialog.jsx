import { forwardRef } from "react";

export const InfoDialog = forwardRef(function Dialog({ onClose, entry }, ref) {
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
        onClose={onclose}
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
            <button onClick={onClose} className="text-lg hover:text-gray-600">
              <i className="cursor-pointer fa-solid fa-xmark text-2xl text-gray-400"></i>
            </button>
          </header>
          <div className="flex-1 overflow-y-auto p-10">
            <div className="w-full h-96">
              <img
                className="w-full h-full object-cover"
                src={
                  entry.image ||
                  "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
                }
              ></img>
            </div>
            <div className="px-4 py-6">
              <p className="text-2xl font-bold pb-3 border-b border-gray-200">
                {entry.title}
              </p>
              <div className="flex items-center justify-between py-3">
                <p>{entry.date}</p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
});
