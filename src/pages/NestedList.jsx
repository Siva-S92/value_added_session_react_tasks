import React, { useState } from "react";
import { Link } from "react-router-dom";

const NestedList = () => {
  // Sample data structure representing parent-child relationships
  const data = [
    {
      name: "Root 1",
      children: [
        {
          name: "Child 1.1",
          children: [{ name: "Sub-child 1.1.1" }, { name: "Sub-child 1.1.2" }],
        },
        {
          name: "Child 1.2",
          children: [{ name: "Sub-child 1.2.1" }],
        },
      ],
    },
    {
      name: "Root 2",
      children: [
        {
          name: "Child 2.1",
          children: [{ name: "Sub-child 2.1.1" }, { name: "Sub-child 2.1.2" }],
        },
      ],
    },
  ];

  const [expanded, setExpanded] = useState({}); // Tracks expanded items

  // Toggles the visibility of children for a given item
  const toggleExpand = (path) => {
    setExpanded((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  // Recursive function to render the nested structure
  const renderList = (items, path = "") => {
    return (
      <>
        <ul className="pl-4">
          {items.map((item, index) => {
            const currentPath = `${path}-${index}`;
            const hasChildren = item.children && item.children.length > 0;

            return (
              <li key={currentPath} className="my-1">
                <div
                  className={`flex items-center gap-2 cursor-pointer ${
                    hasChildren ? "hover:text-blue-500" : ""
                  }`}
                  onClick={() => hasChildren && toggleExpand(currentPath)}
                >
                  {hasChildren && (
                    <span
                      className={`transition-transform ${
                        expanded[currentPath] ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>
                  )}
                  <span className="font-medium">{item.name}</span>
                </div>
                {hasChildren && expanded[currentPath] && (
                  <div className="ml-4 border-l border-gray-300">
                    {renderList(item.children, currentPath)}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="text-center">
        <button className="bg-slate-400 rounded-md px-2 py-1">
          <Link to={"/"}>go back to home</Link>
        </button>
      </div>
      <h1 className="text-center text-3xl font-bold">
        Problem 2 - Nested List component
      </h1>

      <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg bg-white">
        <h1 className="text-lg font-bold text-gray-700">Nested List Viewer</h1>
        {renderList(data)}
      </div>
    </>
  );
};

export default NestedList;
