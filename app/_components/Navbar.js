import { MapPinned } from "lucide-react";
import React from "react";

function Navbar({ state, unit, loc }) {
  return (
    <div className="flex justify-center items-center gap-5 sm:gap-10 mt-5">
      <select
        id="cars"
        className="text-black bg-transparent border sm:px-10 py-2 rounded-2xl shadow-[0px_0px_400px_0px_#3182ce]"
        onChange={(e) => state(e.target.value)}
      >
        <optgroup className="bg-black text-white">
          <option value="" disabled selected>
            Select City
          </option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="london">London</option>
        </optgroup>
      </select>
      <MapPinned onClick={()=>loc(prev => !prev)} className="text-gray-700" size={30} />
      <select
        id="cars"
        className="text-black bg-transparent border sm:px-10 py-2 rounded-2xl shadow-[0px_0px_400px_0px_#3182ce]"
        onChange={(e) => unit(e.target.value)}
      >
        <optgroup className="bg-black text-white">
          <option value="" disabled selected>
            Convert Unit
          </option>
          <option value="metric">Celsius</option>
          <option value="us">Fahrenheit</option>
        </optgroup>
      </select>
    </div>
  );
}

export default Navbar;
