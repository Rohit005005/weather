import Image from "next/image";

function Future({ record, daynum ,index1,unit}) {
  let degree;
  unit == "metric" ? (degree = "c") : (degree = "f");
  return (
    <div>
      {/*Shows the 14 day forecast of the weather*/}
      <div className="flex justify-center items-center">
        <p className="text-xl sm:text-3xl text-black my-5 sm:my-10 px-10 sm:pt-5 pt-2 pb-3 font-extrabold rounded-full bg-white shadow-[0px_50px_600px_0px_#2b6cb0] flex flex-col justify-center items-center">
          14 day Forecast
          <p className="text-sm font-normal">
          Click on them to see details
        </p>
        </p>
        {/*User can click on the cards to view detailed weather info of that day*/}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-5 mb-20">
        {record.days.slice(1).map((day, index) => (
          <div
            onClick={() => daynum(index + 1)}
            key={index}
            className={`hover:scale-105 p-4 rounded-2xl bg-white bg-opacity-75 text-black ${index1==index+1&&`border-2 border-gray-700 bg-transparent shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}`}
          >
            <div className="font-extrabold text-md mb-4">{day.datetime}</div>
            <div className=" flex justify-center items-center  w-[120px] h-[100px]">
              <Image src={day.icon + ".svg"} height={100} width={150} />
            </div>
            <div className="mt-3 flex justify-between px-0">
              <p className="text-xl font-semibold">{day.tempmax+ degree}</p>
              <p className="text-xl font-semibold text-gray-500">{day.tempmin+ degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Future;
