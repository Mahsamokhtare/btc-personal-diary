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
        className="fixed w-[800px] h-[700px] rounded-lg p-0 bg-white shadow-2xl"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
        }}
      >
        <div className="w-full h-full flex flex-col">
          <div className="relative w-full h-96 group">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 
               flex items-center justify-center  cursor-pointer 
               w-12 h-12 rounded-full 
               bg-white/90 hover:bg-white 
               shadow-lg transition-all duration-300 
               hover:scale-110 active:scale-90"
            >
              <i className="fa-solid fa-xmark text-2xl text-gray-600"></i>
            </button>
            {/* The Image */}
            <img
              className="w-full h-full object-cover"
              src={
                entry.image ||
                "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
              }
              alt={entry.title}
            />
          </div>
          <div className="flex-1 overflow-y-auto p-10">
            <div className=" flex items-center justify-between px-4 py-6  border-b border-gray-200">
              <p className="text-2xl font-bold  text-gray-600">{entry.title}</p>
              <button className="group/link flex items-center bg-[#faf3ff] px-5 py-4 rounded-lg text-gray-600 font-medium">
                <i className="fa-solid fa-calendar pr-4 text-purple-700 transition-transform duration-300 group-hover:translate-x-1"></i>
                <p>{entry.date}</p>
              </button>
            </div>
            <div className="px-3 py-3">
              <h1 className="text-purple-500 font-bold text-sm mb-4 mt-3">
                DESCRIPTION
              </h1>
              <p>{entry.content}</p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
});
