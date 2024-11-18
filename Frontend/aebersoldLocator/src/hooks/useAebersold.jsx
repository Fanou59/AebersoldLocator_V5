import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

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

export default useAebersold;
