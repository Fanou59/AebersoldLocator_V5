import DetailTrack from "./DetailTrack";
import useAebersold from "../hooks/useAebersold";

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
            data.map((item) => <DetailTrack item={item} key={item.id} />)
          ) : (
            <div>Aucun résultat trouvé.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
