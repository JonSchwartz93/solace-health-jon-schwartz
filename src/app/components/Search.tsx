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
    <div>
      <p>Search</p>
      <p>
        Searching for: <span id="search-term">{input}</span>
      </p>
      <input
        style={{ border: "1px solid black" }}
        onChange={onChange}
        value={input}
      />
      <button onClick={onClick}>Reset Search</button>
    </div>
  );
}
