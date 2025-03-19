import React from "react";

const StickyButton = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 sm:hidden">
      <a
        href="https://cleanfoldlaundry.curbsidelaundries.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-full bg-blue-500 px-6 py-4 text-center text-xl font-bold text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Schedule Pickup
      </a>
    </div>
  );
};

export default StickyButton;
