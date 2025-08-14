import React from "react";
import { Advocate } from "../types";

export function Row({ advocate }: { advocate: Advocate }) {
  return (
    <tr
      key={advocate.id}
      className={`transition-colors cursor-pointer text-base ${
        advocate.id % 2 === 0 ? "bg-gray-200" : "bg-white"
      } hover:bg-blue-400`}
    >
      <td className="px-4 py-3 border-b border-gray-200">{advocate.firstName}</td>
      <td className="px-4 py-3 border-b border-gray-200">{advocate.lastName}</td>
      <td className="px-4 py-3 border-b border-gray-200">{advocate.city}</td>
      <td className="px-4 py-3 border-b border-gray-200">{advocate.degree}</td>
      <td className="px-4 py-3 border-b border-gray-200">
        {advocate.specialties.map((s, index) => (
          <span
            key={index}
            className="inline-block bg-white text-blue-800 rounded-full px-3 py-1 mr-2 mb-1 text-xs font-semibold shadow-sm border border-blue-200"
          >
            {s}
          </span>
        ))}
      </td>
      <td className="px-4 py-3 border-b border-gray-200">{advocate.yearsOfExperience}</td>
      <td className="px-4 py-3 border-b border-gray-200">{advocate.phoneNumber}</td>
    </tr>
  );
}
