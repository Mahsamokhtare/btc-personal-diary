import { useState } from "react";
import { Form } from "react-router";

export const DiaryForm = ({ onClose, onAddEntry }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedDate, setIsDatePicked] = useState(false);

  const handleChange = (e) => {
    const form = e.target.form;
    const data = new FormData(form);
    const saved = localStorage.getItem("diaryEntries");
    const diaryEntries = saved ? JSON.parse(saved) : [];

    // 2. Check if the date exists in the array
    const dateAlreadyExists = diaryEntries.some(
      (entry) => entry.date === data.get("date")?.trim()
    );

    console.log("this is ", dateAlreadyExists);

    // 3. Update the state
    setIsDatePicked(dateAlreadyExists);

    // Check all fields
    const title = data.get("title")?.trim();
    const date = data.get("date")?.trim();
    const image = data.get("image")?.trim();
    const content = data.get("content")?.trim();
    console.log(isFormValid);

    setIsFormValid(title && date && image && content && !dateAlreadyExists);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entry = {
      id: Date.now(),
      title: formData.get("title"),
      date: formData.get("date"),
      image: formData.get("image"),
      content: formData.get("content"),
    };
    // console.log(entry);

    onAddEntry(entry);

    e.target.reset();
    setIsFormValid(false);
    setIsDatePicked(false);

    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="pb-5">
          <label className="flex items-center text-gray-700 pl-2 pb-2 text-bold text-lg font-semibold">
            <i className="fa-regular fa-file-lines text-purple-600 pr-3"></i>
            Title <span className="pl-1">*</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="What happend today?"
            required
            className="w-full px-4 py-5 border-1 border-gray-200 rounded-lg"
            onChange={handleChange}
          ></input>
        </div>
        <div className="pb-5">
          <label className="flex items-center text-gray-700 pl-2 pb-2 text-bold text-lg font-semibold">
            <i className="fa-regular fa-calendar text-purple-600 pr-3"></i>
            Date <span className="pl-0.5">*</span>
          </label>
          <input
            name="date"
            type="date"
            placeholder="mm/dd/yyyy"
            required
            className="w-full px-4 py-5 border-1 border-gray-200 rounded-lg"
            onChange={handleChange}
          ></input>
        </div>
        {selectedDate && (
          <div className="px-4 py-3 bg-red-100 rounded-lg mb-8 border-1 border-red-900">
            <p className="text-left text-red-900 ">
              <i class="fa-solid fa-circle-exclamation text-red-900 pr-3"></i>
              An entry already exists for this date. Please come back tomorrow!
            </p>
          </div>
        )}
        <div className="pb-5">
          <label className="flex items-center text-gray-700 pl-2 pb-2 text-bold text-lg font-semibold">
            <i className="fa-regular fa-image text-purple-600 pr-3"></i>
            Image URL <span>*</span>
          </label>
          <input
            name="image"
            placeholder="https://example.com/image.jpg"
            required
            className="w-full px-4 py-5 border-1 border-gray-200 rounded-lg"
            onChange={handleChange}
          ></input>
        </div>
        <div className="pb-5">
          <label className="flex items-center text-gray-700 pl-2 pb-2 text-bold text-lg font-semibold">
            <i className="fa-regular fa-file-lines text-purple-600 pr-3"></i>
            Content <span>*</span>
          </label>
          <textarea
            name="content"
            rows={3}
            placeholder="What about your day"
            required
            className="w-full px-4 py-5 border-1 border-gray-200 rounded-lg"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 border-1 border-gray-600 cursor-pointer px-4 py-3 rounded-xl "
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`w-1/2 px-4 py-3 rounded-xl  text-white transition-colors ${
              isFormValid
                ? "cursor-pointer bg-gradient-to-r  from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                : "bg-gray-400 cursor-not-allowed "
            }`}
          >
            Add Entry
          </button>
        </div>
      </form>
    </>
  );
};
