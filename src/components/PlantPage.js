import React, { useState, useEffect }from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState ([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(" http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plants => setPlants(plants) 
    )
  }, [])

  const addPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
 }
  const deletePlant = (id) => {
    const updatedPlants = plants.filter(plant => plant.id !== id)
    setPlants(updatedPlants)
}
 
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
   })

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant}/>
      <Search search={search} onSearchChange={setSearch}/>
      <PlantList plants={displayedPlants} onDeletePlant={deletePlant}/>
    </main>
  );
}

export default PlantPage;
