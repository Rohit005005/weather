import Image from 'next/image'
import React from 'react'

function Hero({record,daynum}) {
  return (
    <div className="flex gap-3 sm:gap-10 justify-between sm:w-[70%]">
            <div className="  flex flex-col justify-center items-start p-5 sm:px-10 rounded-2xl shadow-[0px_0px_400px_0px_#3182ce] text-black">
              {/*Shows city name */}
              <div>
                <p className="sm:text-4xl  md:text-5xl  text-xl font-extrabold">{record.address.toUpperCase()}</p>
              </div>
              <div>
                {/*Shows city weather conditions*/}
                <p className="mt-1 sm:mt-3 sm:text-xl md:text-2xl text:lg font-normal text-gray-500">
                  {record.days[daynum].conditions}
                </p>
              </div>
              <div>
                {/*Shows a description accordinh to the weather */}
                <p className="mt-1 text-sm font-semibold text-black">
                  {record.days[daynum].description}
                </p>
              </div>
            </div>
            <div className=" flex justify-center items-center border p-5 shadow-[0px_0px_400px_0px_#3182ce] rounded-2xl">
              {/*Shows the weather condition icon*/}
              <Image
                src={record.days[daynum].icon + ".svg"}
                height={100}
                width={300}
              />
            </div>
          </div>
  )
}

export default Hero