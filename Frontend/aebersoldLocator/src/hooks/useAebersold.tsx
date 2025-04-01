import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export type Track = {
  id: number;
  title: string;
  album: number;
  disc: number;
  chorus: number;
  track: number;
  key: string;
  style: string;
  tempo: number;
};

function useAebersold(title: string) {
  const { data, error, isLoading } = useSWR<Track[]>(
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
