import React from "react";

function Info({ record, daynum, unit }) {
  let degree;
  unit == "metric" ? (degree = "c") : (degree = "f");
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex p-0 mb-5 w-[90%] justify-between items-center">
        <div className=" shadow-[0px_0px_400px_0px_#3182ce] rounded-2xl text-black bg-white bg-opacity-60 p-5 w-[30%] flex flex-col justify-center items-center">
          <p className="text-3xl font-extrabold">Temperature</p>
          <div className=" flex gap-6 p-2">
            <p className="text-3xl font-semibold">
              {record.days[daynum].tempmax + degree}
            </p>
            <p className="text-3xl font-semibold text-gray-500">
              {record.days[daynum].tempmin + degree}
            </p>
          </div>
        </div>

        <div className=" shadow-[0px_0px_400px_0px_#3182ce] rounded-2xl text-black bg-white bg-opacity-60 p-5 w-[30%] flex flex-col justify-center items-center">
          <p className="text-3xl font-extrabold">Feels like</p>
          <div className="flex  gap-6 p-2">
            <p className="text-3xl font-semibold">
              {record.days[daynum].feelslikemax+ degree}
            </p>
            <p className="text-3xl font-semibold text-gray-500">
              {record.days[daynum].feelslikemin+ degree}
            </p>
          </div>
        </div>

        <div className=" shadow-[0px_0px_400px_0px_#3182ce] rounded-2xl text-black bg-white bg-opacity-60 p-5 w-[30%] flex flex-col justify-center items-center">
          <p className="text-3xl font-extrabold">Rain</p>
          <div className="flex  gap-6 p-2">
            <p className="text-3xl font-semibold">
              {record.days[daynum].precipprob + "%"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex  p-0 w-[90%] justify-between items-center">
        <div className=" rounded-2xl text-black bg-white bg-opacity-60 p-5 w-[30%] flex flex-col justify-center items-center">
          <p className="text-3xl font-extrabold">Sunrise</p>
          <div className="flex  gap-6 p-2">
            <p className="text-3xl font-semibold">
              {record.days[daynum].sunrise}
            </p>
          </div>
        </div>

        <div className="  rounded-2xl text-black bg-white bg-opacity-60 p-5 w-[30%] flex flex-col justify-center items-center">
          <p className="text-3xl font-extrabold">Sunset</p>
          <div className="flex  gap-6 p-2">
            <p className="text-3xl font-semibold">
              {record.days[daynum].sunset}
            </p>
          </div>
        </div>

        <div className="  rounded-2xl text-black bg-white bg-opacity-60 p-5 w-[30%] flex flex-col justify-center items-center">
          <p className="text-3xl font-extrabold">Humidity</p>
          <div className="flex  gap-6 p-2">
            <p className="text-3xl font-semibold">
              {record.days[daynum].humidity + "%"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
