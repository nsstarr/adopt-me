import React from "react";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import Form from "./Form";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location:"",
    animal:"",
    breed:"",
  })
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch)
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <Form
        handleSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target); //Browser Form API
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj)
        }}
        animals={ANIMALS}
        breeds={breeds}
        handleAnimalChange={(e) => {
          setAnimal(e.target.value);
        }}
        handleAnimalBlur={(e) => {
          setAnimal(e.target.value);
        }}
      />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
