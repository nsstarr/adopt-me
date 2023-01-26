import { Animal } from "./APIResponsesTypes";
import React from "react";
import { useState, useTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import useLocalStorage from "use-local-storage";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import Form from "./Form";
import Pagination from "./Pagination";
const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "" as Animal,
    breed: "",
  });
  const [animal, setAnimal] = useState("" as Animal);
  const [breeds] = useBreedList(animal);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "search-params"
  );
  const [isPending, startTransition] = useTransition();

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = pets.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(pets.length / recordsPerPage);

  const switchTheme = () => {
    const newTheme = theme === "search-params" ? "dark" : "search-params";
    setTheme(newTheme);
  };

  return (
    <>
      <div className="search-params my-0 mx-auto w-11/12" data-theme={theme}>
        <button onClick={switchTheme}>
          Switch to {theme === "search-params" ? "Dark" : "Light"} Theme
        </button>
        <Form
          handleSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget); //Browser Form API
            const obj = {
              animal: formData.get("animal")?.toString() ?? ("" as Animal),
              breed: formData.get("breed")?.toString() ?? ("" as Animal),
              location: formData.get("location")?.toString() ?? ("" as Animal),
            };
            startTransition(() => {
              setRequestParams(obj);
            });
          }}
          animals={ANIMALS}
          breeds={breeds}
          handleAnimalChange={(e) => {
            setAnimal(e.target.value as Animal);
          }}
          handleAnimalBlur={(e) => {
            setAnimal(e.target.value as Animal);
          }}
          isPending={isPending}
        />
        <Results pets={currentRecords as number} />
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default SearchParams;
