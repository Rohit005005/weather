import Image from 'next/image'
import React from 'react'

function Hero({record,daynum}) {
  return (
    <div className="flex gap-10 justify-between  w-[70%]">
            <div className=" flex flex-col justify-center items-start px-10 rounded-2xl shadow-[0px_0px_400px_0px_#3182ce] text-black">
              <div>
                <p className="text-5xl font-extrabold">{record.address.toUpperCase()}</p>
              </div>
              <div>
                <p className="mt-3 text-2xl font-normal text-gray-500">
                  {record.days[daynum].conditions}
                </p>
              </div>
              <div>
                <p className="mt-1 text-sm font-semibold text-black">
                  {record.days[daynum].description}
                </p>
              </div>
            </div>
            <div className=" flex justify-center items-center border p-5 shadow-[0px_0px_400px_0px_#3182ce] rounded-2xl">
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