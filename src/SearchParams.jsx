import React from "react";
import { useEffect, useState } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
import Form from "./Form";

const SearchParams = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <Form
        handleSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
        location={location}
        handleLocationChange={(e) => setLocation(e.target.value)}
        animal={animal}
        animals={ANIMALS}
        breed={breed}
        breeds={breeds}
        handleAnimalChange={(e) => {
          setAnimal(e.target.value);
          setBreed("");
        }}
        handleAnimalBlur={(e) => {
          setAnimal(e.target.value);
          setBreed("");
        }}
        handleBreedChange={(e) => setBreed(e.target.value)}
        handleBreedBlur={(e) => setBreed(e.target.value)}
      />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
