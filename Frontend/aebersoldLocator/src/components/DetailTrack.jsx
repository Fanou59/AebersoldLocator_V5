function DetailTrack({ item }) {
  return (
    // <div className="p-4 border-b border-gray-200">
    //   <h3 className="font-roboto font-medium text-gray-900">{item.title}</h3>
    //   <p className="font-roboto text-sm text-gray-600">Album: {item.album}</p>
    //   <p className="font-roboto text-sm text-gray-600">
    //     Disc number: {item.disc}
    //   </p>
    //   <p className="font-roboto text-sm text-gray-600">
    //     Track N°: {item.track}
    //   </p>

    //   <p className="font-roboto text-sm text-gray-600">Key: {item.key}</p>
    //   <p className="font-roboto text-sm text-gray-600">Style: {item.style}</p>
    //   <p className="font-roboto text-sm text-gray-600">Tempo: {item.tempo}</p>
    //   <p className="font-roboto text-sm text-gray-600">
    //     Nb de chorus: {item.chorus}
    //   </p>
    // </div>
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-4">
      <h3 className="font-roboto font-semibold text-xl text-gray-900">
        {item.title}
      </h3>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <p className="font-roboto text-sm text-gray-700">
          <span className="font-medium text-gray-900">Album:</span> {item.album}
        </p>
        <p className="font-roboto text-sm text-gray-700">
          <span className="font-medium text-gray-900">Disc number:</span>{" "}
          {item.disc}
        </p>
        <p className="font-roboto text-sm text-gray-700">
          <span className="font-medium text-gray-900">Track N°:</span>{" "}
          {item.track}
        </p>
        <p className="font-roboto text-sm text-gray-700">
          <span className="font-medium text-gray-900">Key:</span> {item.key}
        </p>
        <p className="font-roboto text-sm text-gray-700">
          <span className="font-medium text-gray-900">Style:</span> {item.style}
        </p>
        <p className="font-roboto text-sm text-gray-700">
          <span className="font-medium text-gray-900">Tempo:</span> {item.tempo}
        </p>
        <p className="font-roboto text-sm text-gray-700">
          <span className="font-medium text-gray-900">Nb de chorus:</span>{" "}
          {item.chorus}
        </p>
      </div>
    </div>
  );
}

export default DetailTrack;
