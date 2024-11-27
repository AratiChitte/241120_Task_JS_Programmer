import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { bigCats, bigFish, dogs } from "../data/allData";

type Animal = {
  Species: string;
  name: string;
  location: string;
  size: string;
  image: string;
};

const Animal: React.FC = () => {
  // Define animals and fishes as arrays of Animal type
  const animals: Animal[] = bigCats;
  const fishes: Animal[] = bigFish;
  const dogsinfo: Animal[] = dogs;

  return (
    <div className="container mb-6">
      <h1 className="text-center mb-4">Animal Grid</h1>

      {/* Section for Big Cats */}
      <h2 className="text-left mb-3">Table:1 Big Cats</h2>
      <div className="row">
        {animals.map((animal, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div>
              {/* Card Body */}
              <div >
                <h5 className="card-title">{animal.name}</h5>
                <p className="card-text">
                  <strong>Species:</strong> {animal.Species}
                  <br />
                  <strong>Location:</strong> {animal.location}
                  <br />
                  <strong>Size:</strong> {animal.size}
                </p>
              </div>
              {/* Image Section */}
              <img
                src={animal.image}
                className="card-img-top"
                alt={animal.name}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Section for fishes */}
      <h2 className="text-left mb-3">Table:2 Big Fish</h2>
      <div className="row">
        {fishes.map((animal, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div>
              {/* Card Body */}
              <div >
                <h5 className="card-title">{animal.name}</h5>
                <p className="card-text">
                  <strong>Species:</strong> {animal.Species}
                  <br />
                  <strong>Location:</strong> {animal.location}
                  <br />
                  <strong>Size:</strong> {animal.size}
                </p>
              </div>
              {/* Image Section */}
              <img
                src={animal.image}
                className="card-img-top"
                alt={animal.name}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Section for dogs */}
      <h2 className="text-left mb-3">Table:3 Dogs</h2>
      <div className="row">
        {dogsinfo.map((animal, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div>
              {/* Card Body */}
              <div >
                <h5 className="card-title">{animal.name}</h5>
                <p className="card-text">
                  <strong>Species:</strong> {animal.Species}
                  <br />
                  <strong>Location:</strong> {animal.location}
                  <br />
                  <strong>Size:</strong> {animal.size}
                </p>
              </div>
              {/* Image Section */}
              <img
                src={animal.image}
                className="card-img-top"
                alt={animal.name}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animal;
