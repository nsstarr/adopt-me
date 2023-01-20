import React from "react";
import { useContext } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const Form = ({
  handleSubmit,
  handleAnimalChange,
  handleAnimalBlur,
  animals,
  breeds,
  isPending,
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
          className="search-input"
        />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          name="animal"
          onChange={handleAnimalChange}
          onBlur={handleAnimalBlur}
          className="search-input"
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
          className="search-input grayed-out-disabled"
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
      {isPending ? (
        <div className="mini loading-pane">
          <h2 className="loader">🐕</h2>
        </div>
      ) : (
        <button className="color rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
          Submit
        </button>
      )}
    </form>
  );
};

export default Form;
