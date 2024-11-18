import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [title, setTitle] = useState("");

  return (
    <div className="p-4">
      <header className="bg-indigo-800 text-white p-4 font-russo text-3xl mb-4">
        Aebersold Locator
      </header>
      <SearchBar setTitle={setTitle} />
      <SearchResults title={title} />
    </div>
  );
}

export default App;
