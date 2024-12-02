import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const InfiniteScrollPage = () => {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
  ); // Initial items
  const [isFetching, setIsFetching] = useState(false);

  // Fetch more items when called
  const fetchMoreItems = () => {
    setTimeout(() => {
      const newItems = Array.from(
        { length: 20 },
        (_, i) => `Item ${items.length + i + 1}`
      );
      setItems((prevItems) => [...prevItems, ...newItems]);
      setIsFetching(false);
    }, 1500); // Simulate API delay
  };

  // Infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        !isFetching
      ) {
        setIsFetching(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching]);

  // Trigger fetch when isFetching becomes true
  useEffect(() => {
    if (isFetching) {
      fetchMoreItems();
    }
  }, [isFetching]);

  return (
    <>
      <div className="text-center">
        <button className="bg-slate-400 rounded-md px-2 py-1">
          <Link to={"/"}>go back to home</Link>
        </button>
      </div>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Infinite Scroll Example
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm text-center"
            >
              {item}
            </div>
          ))}
        </div>
        {isFetching && (
          <div className="text-center mt-6 text-gray-600">
            <span className="animate-pulse">Loading more items...</span>
          </div>
        )}
      </div>
    </>
  );
};

export default InfiniteScrollPage;
