import React from 'react';

const Form = ({
  handleSubmit,
  handleAnimalChange,
  handleAnimalBlur,
  animals,
  breeds
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location">
        Location
        <input
          id="location"
          name="location"
          placeholder="Location"
        />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          name="animal"
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

      <button>Submit</button>
    </form>
  );
};

export default Form;