import React from 'react';
import { useContext } from 'react';
import AdoptedPetContext from './AdoptedPetContext';

const Form = ({
  handleSubmit,
  handleAnimalChange,
  handleAnimalBlur,
  animals,
  breeds
}) => {
  const [adoptedPet] = useContext(AdoptedPetContext)
  return (
    <form onSubmit={handleSubmit}>
    {
      adoptedPet ? (
        <div className='pet image-container'>
          <img src={adoptedPet.images[0]} alt={adoptedPet.name}/>
        </div>
      ) : null
    }
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