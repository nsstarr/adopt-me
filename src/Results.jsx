import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>Not Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.image}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Results;
