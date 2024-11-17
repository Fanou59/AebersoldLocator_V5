import "./App.css";
import useSWR from "swr";
import { useState } from "react";

function App() {
  return (
    <div>
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
    <div>
      <input type="text" placeholder="Search..." onChange={handleChange} />
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
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Key: {item.key}</p>
            <p>Style: {item.style}</p>
            <p>Tempo: {item.tempo}</p>
          </div>
        ))
      ) : (
        <div>Aucun résultat trouvé.</div>
      )}
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
