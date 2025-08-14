import React from "react";
import { Advocate } from "../types";

export function Row({ advocate }: { advocate: Advocate }) {
  return (
    <tr
      key={advocate.id}
      style={{
        backgroundColor: advocate.id % 2 === 0 ? "#f9f9f9" : "#ffffff",
      }}
    >
      <td>{advocate.firstName}</td>
      <td>{advocate.lastName}</td>
      <td>{advocate.city}</td>
      <td>{advocate.degree}</td>
      <td>
        {advocate.specialties.map((s, index) => (
          <div key={index}>{s}</div>
        ))}
      </td>
      <td>{advocate.yearsOfExperience}</td>
      <td>{advocate.phoneNumber}</td>
    </tr>
  );
}
