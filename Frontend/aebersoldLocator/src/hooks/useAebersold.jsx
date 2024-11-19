import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useAebersold(title) {
  const { data, error, isLoading } = useSWR(
    title
      ? `https://aebersoldlocator.alwaysdata.net/api/tracks/search?title=${title}`
      : null,
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}

export default useAebersold;
