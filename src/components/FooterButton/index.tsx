import React from "react";

const StickyButton = () => {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform sm:hidden">
      <a
        href="https://cleanfoldlaundry.curbsidelaundries.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-blue-500 px-6 py-3 text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Schedule Pickup
      </a>
    </div>
  );
};
export default StickyButton;
