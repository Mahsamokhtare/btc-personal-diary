// export const AddDiaryEntryButton = ({ openDialog, entry }) => {
//   return (
//     <button
//       onClick={openDialog}
//       className="group cursor-pointer w-full text-lg mt-3 sm:m-0 sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl text-white shadow-lg transition-all duration-300 hover:shadow-purple-200 hover:scale-105 active:scale-95"
//     >
//       <i className="fa-solid fa-plus pr-2 text-md transition-transform duration-500 group-hover:rotate-180"></i>
//       {entry}
//     </button>
//   );
// };
export const AddDiaryEntryButton = ({ openDialog, entry }) => {
  return (
    <button
      onClick={openDialog}
      className="group cursor-pointer w-full text-lg mt-3 sm:m-0 sm:w-auto bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-3 rounded-xl text-white shadow-lg transition-all duration-300 hover:shadow-purple-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
    >
      <i className="fa-solid fa-plus text-md transition-transform duration-500 group-hover:rotate-180 inline-block"></i>
      <span>{entry}</span>
    </button>
  );
};
