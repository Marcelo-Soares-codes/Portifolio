interface TimeLineProps {
  data: { title: string; description?: string; date: string }[];
}

export const TimeLine = ({ data }: TimeLineProps) => {
  return (
    <div className="relative flex items-center w-full py-4 px-2">
      <div
        className="absolute w-full h-1 bg-green-600"
        style={{ top: '50%' }}
      />
      {data.map((item, index) => (
        <div
          className="relative flex flex-col w-full justify-center items-center"
          key={index}
        >
          {index % 2 === 0 && (
            <div className="flex flex-col justify-center items-center text-center mb-24">
              <div className="max-w-xs">
                <h1 className="mb-1 text-xl">{item.title}</h1>
                <p className="text-zinc-400 text-xs overflow-hidden mb-1">
                  {item.date}
                </p>
                <p className="text-zinc-400 text-xs overflow-hidden mb-1">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-1 bg-green-600 h-4 -mb-1 rounded-t-full" />
                <div className="w-6 h-6 bg-green-600 rounded-full z-10" />
              </div>
            </div>
          )}
          {index % 2 !== 0 && (
            <div className="flex flex-col justify-center items-center text-center mt-24">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-green-600 rounded-full z-10" />
                <div className="w-1 bg-green-600 h-5 -mt-1 rounded-b-full" />
              </div>
              <div className="max-w-xs">
                <p className="text-zinc-400 text-xs overflow-hidden mt-1">
                  {item.date}
                </p>
                <p className="text-zinc-400 text-xs overflow-hidden mt-1">
                  {item.description}
                </p>
                <h1 className="mt-1 text-xl">{item.title}</h1>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
