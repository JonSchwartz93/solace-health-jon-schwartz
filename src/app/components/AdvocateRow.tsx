import React from "react";
import { Advocate } from "../types";

export function AdvocateRow({ advocate }: { advocate: Advocate }) {
  return (
    <tr key={advocate.id}>
      <td>{advocate.firstName}</td>
      <td>{advocate.lastName}</td>
      <td>{advocate.city}</td>
      <td>{advocate.degree}</td>
      <td>
        {advocate.specialties.map((s, idx) => (
          <div key={idx}>{s}</div>
        ))}
      </td>
      <td>{advocate.yearsOfExperience}</td>
      <td>{advocate.phoneNumber}</td>
    </tr>
  );
}
