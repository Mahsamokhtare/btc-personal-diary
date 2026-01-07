export const DiaryForm = () => {
  return (
    <>
      <form action="">
        <div className="pb-3">
          <label className="flex pl-2 pb-2 text-bold text-lg">
            Title <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="What happend today?"
            required
            className="w-full px-4 py-5 border-1 border-gray-200 rounded-lg"
          ></input>
        </div>
        <div className="pb-3">
          <label className="flex pl-2 pb-2 text-bold text-lg">
            Title <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="What happend today?"
            required
            className="w-full px-4 py-5 border-1 border-gray-200 rounded-lg"
          ></input>
        </div>
      </form>
    </>
  );
};
