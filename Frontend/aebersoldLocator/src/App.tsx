import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar.tsx";
import SearchResults from "./components/SearchResults.tsx";

function App() {
  const [title, setTitle] = useState("");

  return (
    <div className="p-4 flex space-y-2 flex-col">
      <header className="bg-indigo-800 text-white p-4 font-russo text-3xl mb-4">
        Aebersold Locator
      </header>
      <SearchBar setTitle={setTitle} />
      <SearchResults title={title} />
    </div>
  );
}

export default App;
