import React, { useState } from "react";

function PlantCard({plant:{id, name, image, price}, onDeletePlant }) {
  const [inStock, setInStock] = useState(true)

const handleStockChange = () => {
  setInStock(!inStock)
}

 function handleDelete(){
  fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
  })
    onDeletePlant(id)
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button 
        onClick={handleStockChange}
        className="primary">In Stock</button>
      ) : (
        <button
        onClick={handleStockChange}
        >Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
