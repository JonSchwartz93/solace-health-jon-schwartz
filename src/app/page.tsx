"use client";

import { useEffect, useState } from "react";
import { Advocate } from "./types";
import { AdvocateTable } from "./components/AdvocateTable";
import { Search } from "./components/Search";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setInput(searchTerm);

    console.log("filtering advocates...");

    const filteredAdvocates = advocates.filter((advocate) => {
      const term = searchTerm.toLowerCase();

      return (
        advocate.firstName.toLowerCase().includes(term) ||
        advocate.lastName.toLowerCase().includes(term) ||
        advocate.city.toLowerCase().includes(term) ||
        advocate.degree.toLowerCase().includes(term) ||
        advocate.specialties.some((s) => s.toLowerCase().includes(term)) ||
        advocate.yearsOfExperience.toString().includes(term)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <Search input={input} onChange={onChange} onClick={onClick} />
      <br />
      <br />
      <AdvocateTable advocates={filteredAdvocates} />
    </main>
  );
}
