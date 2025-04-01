import {
  Disc3,
  Activity,
  BookOpen,
  Music4,
  Guitar,
  Play,
  RefreshCcwDot,
} from "lucide-react";

export type DetailTrackProps = {
  track: {
    title: string;
    album: number;
    disc: number;
    chorus: number;
    track: number;
    key: string;
    style: string;
    tempo: number;
  };
};

function DetailTrack({ track }: DetailTrackProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-4">
      <h3 className="font-roboto font-semibold text-xl text-gray-900">
        {track.title}
      </h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <BookOpen className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">Album N°:</span>{" "}
            <span>{track.album}</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <Disc3 className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">N°:</span>{" "}
            <span>{track.disc}</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <Play className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">Track N°:</span>{" "}
            <span>{track.track}</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <Music4 className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900"></span>{" "}
            <span>{track.key}</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <Guitar className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">Style:</span>{" "}
            <span>{track.style}</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <Activity className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">Tempo:</span>{" "}
            <span>{track.tempo} BPM</span>
          </div>
        </li>
        <li className="flex items-center font-roboto text-sm text-gray-700 space-x-2">
          <RefreshCcwDot className="text-indigo-500 w-5 h-5" />
          <div className="flex space-x-1">
            <span className="font-medium text-gray-900">Nb de chorus:</span>{" "}
            <span>{track.chorus}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DetailTrack;
