import React, { useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants, setPlants] = useState([]);
  const[search, setSearch] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data));
  },[]);

function handleAddPlant(newPlant) {
  setPlants([...plants, newPlant]);
}

function handleToggleStock(id){
  const updatedPlants = plants.map((plant) =>
  plant.id === id
? {...plant, inStock: !plant.inStock}
: plant
);
setPlants(updatedPlants);

}

const filteredPlants = plants.filter((plant) =>
plant.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search
      search={search}
      onSearchChange={setSearch}
       />
      <PlantList 
      plants={filteredPlants}
      onToggleStock={handleToggleStock}/>
    </main>
  );
}

export default PlantPage;
