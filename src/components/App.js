import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const appClass = false ? "App dark" : "App light"

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}
export default App;
