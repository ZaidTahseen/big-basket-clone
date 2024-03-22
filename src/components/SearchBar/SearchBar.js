import React, { useState } from "react";
import { Button } from "../../common/Button";
import { Input } from "../../common/Input";

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      className="flex justify-center items-center gap-2 my-4 mx-auto w-2/3"
      onSubmit={handleSubmit}
    >
      <Input
        name="search"
        type="text"
        placeholder="Search by title or id"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
      />
      <Button type="submit">
        Search
      </Button>
    </form>
  );
};
