import React from "react";
import { Advocate } from "../types";
import { AdvocateRow } from "./AdvocateRow";

export function AdvocateTable({ advocates }: { advocates: Advocate[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate) => (
          <AdvocateRow key={advocate.id} advocate={advocate} />
        ))}
      </tbody>
    </table>
  );
}
