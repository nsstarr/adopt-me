import React from "react";
import { useContext } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const Form = ({
  handleSubmit,
  handleAnimalChange,
  handleAnimalBlur,
  animals,
  breeds,
}) => {
  const [adoptedPet] = useContext(AdoptedPetContext);
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
    >
      {adoptedPet ? (
        <div className="pet image-container">
          <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
        </div>
      ) : null}
      <label htmlFor="location">
        Location
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
          className="mb-5 block w-60"
        />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          name="animal"
          onChange={handleAnimalChange}
          onBlur={handleAnimalBlur}
          className="mb-5 block w-60"
        >
          <option />
          {animals.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="breed">
        Breed
        <select
          className="mb-5 block w-60 disabled:opacity-50"
          disabled={!breeds.length}
          id="breed"
          name="breed"
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>

      <button className="rounded px-6 py-2 color text-white hover:opacity-50 border-none bg-orange-500">Submit</button>
    </form>
  );
};

export default Form;
