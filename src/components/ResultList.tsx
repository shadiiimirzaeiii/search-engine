import { RelatedTopic } from "@app-types/list";

export default function ResultComponent({ list }: {list: RelatedTopic[]}) {
    return (
            list.map((item, index) => (
              <div className='dark:bg-gray-800 mt-10 p-3 rounded-lg' key={index}>
                  <h4 className='font-bold text-2xl'>{item.Text}</h4>
                  <div className='mt-5 mb-4'>
                    <a href={item.FirstURL} target='_blank' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                      Read more
                    </a>
                </div>
            </div>
          ))
    );
};