import React from "react";

export function Search({
  input,
  onChange,
  onClick,
}: {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">Search</h2>
      <div className="flex items-center gap-2 w-full max-w-md">
        <input
          name="search-input"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChange}
          value={input}
          placeholder="Search for an advocate..."
        />
        <button
          className="px-4 py-2 text-white rounded-lg hover:brightness-90 transition"
          style={{ backgroundColor: "#345A4F" }}
          onClick={onClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
