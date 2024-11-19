const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="flex justify-center items-center h-20">
      <div className="w-8 h-8 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
