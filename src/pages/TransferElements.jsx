import React, { useState } from "react";
import { Link } from "react-router-dom";

const TransferElements = () => {
  const [bucket1, setBucket1] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 5",
  ]);
  const [bucket2, setBucket2] = useState(["Item 4", "Item 6"]);
  const [selectedBucket1, setSelectedBucket1] = useState([]);
  const [selectedBucket2, setSelectedBucket2] = useState([]);

  // Helper function to toggle selection
  const toggleSelection = (item, selectedList, setSelectedList) => {
    if (selectedList.includes(item)) {
      setSelectedList(selectedList.filter((selected) => selected !== item));
    } else {
      setSelectedList([...selectedList, item]);
    }
  };

  // Handle Add
  const handleAdd = () => {
    setBucket2([...bucket2, ...selectedBucket1]);
    setBucket1(bucket1.filter((item) => !selectedBucket1.includes(item)));
    setSelectedBucket1([]); // Clear selection
  };

  // Handle Remove
  const handleRemove = () => {
    setBucket1([...bucket1, ...selectedBucket2]);
    setBucket2(bucket2.filter((item) => !selectedBucket2.includes(item)));
    setSelectedBucket2([]); // Clear selection
  };

  // Handle Add All
  const handleAddAll = () => {
    setBucket2([...bucket2, ...bucket1]);
    setBucket1([]);
    setSelectedBucket1([]); // Clear selection
  };

  // Handle Remove All
  const handleRemoveAll = () => {
    setBucket1([...bucket1, ...bucket2]);
    setBucket2([]);
    setSelectedBucket2([]); // Clear selection
  };

  return (
    <>
      <div className="text-center">
        <button className="bg-slate-400 rounded-md px-2 py-1">
          <Link to={"/"}>go back to home</Link>
        </button>
      </div>
      <h1 className="text-center text-3xl font-bold">
        Problem 1 - Element Transfer
      </h1>

      <div className="flex justify-center items-center gap-8 p-6 bg-gray-50 min-h-screen">
        {/* Bucket 1 */}
        <div className="w-48">
          <h3 className="text-lg font-semibold text-center mb-4">Bucket 1</h3>
          <ul className="list-none p-0 border border-gray-300 rounded-md bg-white">
            {bucket1.map((item, index) => (
              <li
                key={index}
                className={`p-2 m-1 text-center cursor-pointer rounded-md ${
                  selectedBucket1.includes(item)
                    ? "bg-blue-200"
                    : "hover:bg-gray-100"
                }`}
                onClick={() =>
                  toggleSelection(item, selectedBucket1, setSelectedBucket1)
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center">
          <button
            onClick={handleAdd}
            className={`px-4 py-2 mb-2 bg-blue-500 text-white rounded-md ${
              selectedBucket1.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
            disabled={selectedBucket1.length === 0}
          >
            Add Selected
          </button>
          <button
            onClick={handleRemove}
            className={`px-4 py-2 mb-2 bg-red-500 text-white rounded-md ${
              selectedBucket2.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-600"
            }`}
            disabled={selectedBucket2.length === 0}
          >
            Remove Selected
          </button>
          <button
            onClick={handleAddAll}
            className={`px-4 py-2 mb-2 bg-green-500 text-white rounded-md ${
              bucket1.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-green-600"
            }`}
            disabled={bucket1.length === 0}
          >
            Add All
          </button>
          <button
            onClick={handleRemoveAll}
            className={`px-4 py-2 mb-2 bg-yellow-500 text-white rounded-md ${
              bucket2.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-yellow-600"
            }`}
            disabled={bucket2.length === 0}
          >
            Remove All
          </button>
        </div>

        {/* Bucket 2 */}
        <div className="w-48">
          <h3 className="text-lg font-semibold text-center mb-4">Bucket 2</h3>
          <ul className="list-none p-0 border border-gray-300 rounded-md bg-white">
            {bucket2.map((item, index) => (
              <li
                key={index}
                className={`p-2 m-1 text-center cursor-pointer rounded-md ${
                  selectedBucket2.includes(item)
                    ? "bg-blue-200"
                    : "hover:bg-gray-100"
                }`}
                onClick={() =>
                  toggleSelection(item, selectedBucket2, setSelectedBucket2)
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TransferElements;
