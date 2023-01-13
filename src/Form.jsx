import React from 'react';

const Form = ({
  handleSubmit,
  handleLocationChange,
  handleAnimalChange,
  handleAnimalBlur,
  handleBreedChange,
  handleBreedBlur,
  location,
  animal,
  breed,
  animals,
  breeds
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location">
        Location
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={handleLocationChange}
        />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={handleAnimalChange}
          onBlur={handleAnimalBlur}
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
          disabled={!breeds.length}
          id="breed"
          value={breed}
          onChange={handleBreedChange}
          onBlur={handleBreedBlur}
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
};

export default Form;