import DetailTrack from "./DetailTrack";
import useAebersold from "../hooks/useAebersold";
import Loader from "./Loader";

function SearchResults({ title }) {
  const { data, isLoading, isError } = useAebersold(title);
  if (!title)
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md max-w-md mx-auto mt-4">
        <p className="font-roboto text-base">
          Commencer à taper le titre que vous recherchez.
        </p>
      </div>
    );
  if (isLoading) return <Loader isLoading={true} />;
  if (isError)
    return (
      <div className="text-red-500 text-center font-roboto text-lg">
        Error...
      </div>
    );

  return (
    <div className="lg:w-1/2 lg:mx-auto lg:p-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4 ">
        <h3 className="font-roboto text-lg font-semibold text-gray-800">
          Résultats de la recherche :
        </h3>
        <div className="mt-4 flex flex-col space-y-3">
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
