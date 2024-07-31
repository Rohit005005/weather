"use client";
import { useEffect, useState } from "react";
import Navbar from "./_components/Navbar";
import Future from "./_components/Future";
import Info from "./_components/Info";
import Hero from "./_components/Hero";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";
import { Instagram, LinkedinIcon } from "lucide-react";

export default function Home() {
  //Setting states
  const [state, setstate] = useState("delhi");
  const [unit, seunit] = useState("metric");
  const [daynum, setdaynum] = useState(0);
  const [record, setrecord] = useState(null);
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const [loc, getloc] = useState(false);
  const [loading, setloading] = useState(false);

  //fetching weather data using Visual Crossing Api
  useEffect(() => {
    const weather = async () => {
      setloading(true);
      try {
        let response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${state}?unitGroup=${unit}&include=days%2Ccurrent&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&contentType=json`
        );
        response = await response.json();
        setrecord(response);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setloading(false);
      }
    };
    weather();
  }, [state, unit]);

  //fetching user current location as latitude and longitude
  useEffect(() => {
    if (loc) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            (posi) => {
              setlatitude(posi.coords.latitude);
              setlongitude(posi.coords.longitude);
              getloc(false);
            },
            (error) => {
              console.log(error);
            }
          );
        } else if (result.state === "denied") {
          alert(
            "Location access has been denied. Please enable it in your browser settings."
          );
        }
      });
    }
  }, [loc]);

  //fetching user current city using geopify api and previously fetched latitude & longitude
  useEffect(() => {
    if (latitude && longitude) {
      const getstate = async () => {
        setloading(true);
        try {
          let response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${process.env.NEXT_PUBLIC_CITY_API_KEY}`
          );
          response = await response.json();
          setstate(response.results[0].city.toLowerCase());
        } catch (error) {
          console.error("Error fetching location data:", error);
        } finally {
          setloading(false);
        }
      };
      getstate();
    }
  }, [latitude, longitude, loc]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* showing a loading icon until the weather data is fetched */}
      {loading ? (
        <div className="flex items-center justify-center fixed inset-0  z-50">
          <LoaderCircle className="text-black animate-spin" size={100} />
        </div>
      ) : (
        record && (
          <div className="px-4 sm:px-8 flex flex-col gap-5 justify-center items-center z-10 w-full">
            {/*this div only work if weather data is set in the record state*/}

            {/*Other Componenets*/}
            <Navbar state={setstate} unit={seunit} loc={getloc} />
            <Hero record={record} daynum={daynum} />
            <Info record={record} daynum={daynum} unit={unit} />
            <Future record={record} daynum={setdaynum} index1={daynum} unit={unit}/>
            <div className="flex items-center bg-transparent shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-opacity-50 text-white text-sm py-1 px-2 rounded-md fixed bottom-5 right-5 cursor-pointer hover:border-2 hover:text-lg transition-all">
              {/*simple popover for the Developer (Rohit :))*/}
            <Popover>
                <PopoverTrigger className="flex items-center gap-2">
                  <Image
                    className="rounded-full"
                    src={"/PXL_20240207_142809828.jpg"}
                    width={30}
                    height={30}
                  />
                  <p >Made by Rohit</p>
                </PopoverTrigger>
                <PopoverContent className="w-full">
                <Link
                className="flex gap-2"
                href={"https://www.linkedin.com/in/rohit-dev005/"}
              >
                <LinkedinIcon className="text-black" />
                <p>LinkedIn</p>
              </Link>
              <Link
                className="flex gap-2 mt-5"
                href={"https://www.instagram.com/_me_rohitt._/"}
              >
                <Instagram className="text-black" />
                <p>Instagram</p>
              </Link>
                </PopoverContent>
              </Popover>
              </div>
          </div>
        )
      )}
    </div>
  );
}
