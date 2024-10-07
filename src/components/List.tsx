import { RelatedTopic } from "@app-types/index";
import {Link} from 'react-router-dom';

export default function ListComponent({ suggestionsList }: {suggestionsList: RelatedTopic[]}) {
  return (
      <div className="w-fullmax-h-96 overflow-auto mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        { suggestionsList.map((suggestion, index) => (
          <Link to={`/results?qeury=${suggestion.Text}`} key={index} className="block truncate  w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              {suggestion.Text}
          </Link>
        ))
        }
      </div>
  );
}
