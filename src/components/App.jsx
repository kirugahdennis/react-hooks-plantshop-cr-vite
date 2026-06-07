import { useState, useEffect } from "react";
import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import PlantList from "./PlantList";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  fetch("http://localhost:6001/plants")
.then((res) => res.json())
.then((data) => setPlants(data));
},[]);

function addPlant(newPlant) {
  setPlants([...plants, newPlant]);
}
function toggleStock(id) {
  const UpdatedPlants= plants.map((plant) =>
   plant.id === id
?{...plant, inStock: !plant.inStock}
: plant
);
} 
const filteredPlants = plants.filter((plant) =>
plant.name.toLowerCase().includes(search.toLowerCase()));
  return (
  <main>
    <header/>

      <input
      type= "text"
      placeholder = "Search plants.."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <NewPlantForm onAddPlant = {addPlants} />
      <PlantList
      plants={filteredPlants}
      onToggleStock={toggleStock}
      />
  </main>
  );
}

export default App;
