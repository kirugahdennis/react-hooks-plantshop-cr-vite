import React from "react";

function PlantCard({plant, onToggleStock}) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>

      {plant.inStock ?  (
        <button className="primary"
        onClick={() => onToggleStock(plant.id)}
        >
          In Stock
          </button>
      ) : (
        <button onClick={() => onToggleStock(plant.id)}>
          Out of Stock
          </button>
      )}
    </li>
  );
}

export default PlantCard;
