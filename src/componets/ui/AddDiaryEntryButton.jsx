export const AddDiaryEntryButton = ({ openDialog }) => {
  return (
    <button
      onClick={openDialog}
      className="cursor-pointer w-full text-lg mt-3 sm:m-0 sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl text-white"
    >
      <i className="fa-solid fa-plus pr-2 text-md"></i>Add new Diary
    </button>
  );
};
