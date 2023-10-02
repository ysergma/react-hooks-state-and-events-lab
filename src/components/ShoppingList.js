import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
          <option value="All">Filter by category</option>
  const [selectedCat,setSelectedCat]=useState('All')
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCat} onChange={(e)=>(setSelectedCat(e.target.value),console.log(selectedCat))}>
          <option value="All">Filter by category</option>
          <option  value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => { 
          if(selectedCat == "All") {
            return <Item key={item.id} name={item.name} category={item.category} />
          } else if (selectedCat == item.category){
            return  <Item key={item.id} name={item.name} category={item.category} />
          }
          
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
