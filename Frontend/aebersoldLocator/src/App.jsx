import "./App.css";
import useSWR from "swr";
import { useState } from "react";

function App() {
  return (
    <div className="p-4">
      <header class="bg-indigo-800 text-white p-4 font-russo text-3xl">
        Aebersold Locator
      </header>
      <SearchBar />
    </div>
  );
}

export default App;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function SearchBar() {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <label for="search" class="font-roboto text-sm text-gray-700">
        Nom du morceau
      </label>
      <input
        type="text"
        placeholder="Enter a title..."
        onChange={handleChange}
        className="border border-gray-200 rounded p-2 mt-2 w-full"
      />
      <SearchResults title={title} />
    </div>
  );
}

function SearchResults({ title }) {
  const { data, isLoading, isError } = useAebersold(title);
  if (!title) return <div>Veuillez entrer un titre pour rechercher.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="p-6">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4">
        <h3 className="font-roboto text-lg font-semibold text-gray-800">
          Morceau recherché
        </h3>
        <div className="mt-4">
          {data.length > 0 ? (
            data.map((item) => (
              <div className="p-4 border-b border-gray-200" key={item.id}>
                <h3 className="font-roboto font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="font-roboto text-sm text-gray-600">
                  Key: {item.key}
                </p>
                <p className="font-roboto text-sm text-gray-600">
                  Style: {item.style}
                </p>
                <p className="font-roboto text-sm text-gray-600">
                  Tempo: {item.tempo}
                </p>
              </div>
            ))
          ) : (
            <div>Aucun résultat trouvé.</div>
          )}
        </div>
      </div>
    </div>
  );
}

function useAebersold(title) {
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8000/api/tracks/search?title=${title}`,
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
