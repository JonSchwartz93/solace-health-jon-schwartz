import React from "react";
import { Advocate } from "../types";
import { Row } from "./Row";

export function AdvocateTable({ advocates, loading }: { advocates: Advocate[]; loading: boolean }) {
  if (loading) {
    return <p>Loading advocates...</p>
  };

  return (
    <table className="w-full font-sans bg-white text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 font-semibold text-gray-700 border-b">First Name</th>
          <th className="px-4 py-2 font-semibold text-gray-700 border-b">Last Name</th>
          <th className="px-4 py-2 font-semibold text-gray-700 border-b">City</th>
          <th className="px-4 py-2 font-semibold text-gray-700 border-b">Degree</th>
          <th className="px-4 py-2 font-semibold text-gray-700 border-b">Specialties</th>
          <th className="px-4 py-2 font-semibold text-gray-700 border-b">Years of Experience</th>
          <th className="px-4 py-2 font-semibold text-gray-700 border-b">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate) => (
          <Row
            key={advocate.id}
            advocate={advocate}
          />
        ))}
      </tbody>
    </table>
  )
}
