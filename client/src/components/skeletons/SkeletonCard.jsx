import React from "react";

export default function SkeletonCard() {
  return (
    <div className="z-[-10] flex flex-col w-80 shadow-xl cursor-default rounded-lg">
      <div className="animate-pulse bg-gray-300 h-60" />
      <div className="p-8 flex flex-col gap-4">
        <div className="animate-pulse bg-gray-300 h-8 w-3/4" />
        <div className="flex gap-4">
          <div className="animate-pulse bg-gray-300 h-10 w-2/3" />
          <div className="animate-pulse bg-gray-300 h-10 w-1/3" />
        </div>
        <div className="animate-pulse bg-gray-300 h-20 w-full" />
      </div>
    </div>
  );
}
