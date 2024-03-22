import React from "react";

export const EmptyProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <img
        src="https://trolleymate.co.uk/assets/img/error_404.jpeg"
        alt="Empty"
        className="w-48 mb-4"
      />
      <h2 className="text-xl font-semibold">No Products Found</h2>
      <p className="text-gray-600">
        We can't find any item matching your search.
      </p>
    </div>
  );
};
