type PropType = {
    repeat: number
}
export default function SkeletonComponent({ repeat }: PropType) {
    return ( 
        Array.from({ length: repeat }, (_, index) => (
            <div className='p-3 bg-gray-200 rounded-lg dark:bg-gray-700 mb-4 animate-pulse' key={index}>
                <div className="h-2 bg-gray-400 rounded-full max-w-[620px] mb-2.5"></div>
                <div className="h-2 bg-gray-400 rounded-full max-w-[560px] mb-2.5"></div>
                <div className="h-2 bg-gray-400 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-400 rounded-full max-w-[640px] mb-2.5"></div>
                <div className="h-7 bg-gray-400 rounded-md w-20"></div>
            </div>
        ))
    );
};