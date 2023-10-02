import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const[state,SetState]=useState("App Dark")
  const[btn,setBtn]= useState("Light Mode")
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = state==="App light" ? "App dark" : "App light"
  const Btn = btn=="Dark Mode" ? "Light Mode" : "Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button  onClick={()=>(setBtn(Btn),SetState(appClass))} >{Btn}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
