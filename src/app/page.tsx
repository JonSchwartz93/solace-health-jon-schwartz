"use client";

import { useEffect, useState } from "react";
import { Advocate } from "./types";
import { AdvocateTable } from "./components/AdvocateTable";
import { Search } from "./components/Search";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      const term = input.toLowerCase();
      console.log("filtering advocates...");

      const filtered = advocates.filter((advocate) =>
        advocate.firstName.toLowerCase().includes(term) ||
        advocate.lastName.toLowerCase().includes(term) ||
        advocate.city.toLowerCase().includes(term) ||
        advocate.degree.toLowerCase().includes(term) ||
        advocate.specialties.some((s) => s.toLowerCase().includes(term)) ||
        advocate.yearsOfExperience.toString().includes(term)
      );

      setFilteredAdvocates(filtered);
    }, 300);

    return () => clearTimeout(handler);
  }, [input, advocates]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const resetSearchInput = () => {
    setFilteredAdvocates(advocates);
    setInput("");
  };

  return (
    <main className="m-6">
      <div className="flex items-center gap-4">
        <img
          src="/solace_health_logo.png"
          alt="Solace Health Logo"
          className="object-contain h-24"
        />
        <div className="flex-1">
          <Search input={input} onChange={onChange} onClick={resetSearchInput} />
        </div>
      </div>
      <div className="my-4" />
      <AdvocateTable advocates={filteredAdvocates} loading={loading} />
    </main>
  );
}
