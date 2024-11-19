import {
  Disc3,
  Activity,
  BookOpen,
  Music4,
  Guitar,
  Play,
  RefreshCcwDot,
} from "lucide-react";

function DetailTrack({ item }) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-4">
      <h3 className="font-roboto font-semibold text-xl text-gray-900">
        {item.title}
      </h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <BookOpen className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">Album N°:</span>{" "}
            <span>{item.album}</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <Disc3 className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">N°:</span>{" "}
            <span>{item.disc}</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <Play className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">Track N°:</span>{" "}
            <span>{item.track}</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <Music4 className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900"></span>{" "}
            <span>{item.key}</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <Guitar className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">Style:</span>{" "}
            <span>{item.style}</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <Activity className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">Tempo:</span>{" "}
            <span>{item.tempo} BPM</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <RefreshCcwDot className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">Nb de chorus:</span>{" "}
            <span>{item.chorus}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DetailTrack;
