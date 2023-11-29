import React from "react";

const Card = ({ day }) => {
  return (
    <div className="h-48 w-[60vw] border lg:w-[10vw] lg:border-none rounded-3xl   flex flex-col items-center justify-between bg-opacity-60 rounded-lg ">
      <h3
        className={`text-2xl ${
          day.IsDayTime ? "text-black" : "text-white"
        }   md:text-3xl  `}
      >
        {day.dayOfWeek}
      </h3>
      <img
        className="h-[5rem] w-[10rem]"
        src={`/weatherIcons/${day.weatherIcon}.png`}
        alt="Weather Icon"
      />
      <h3
        className={`text-black  md:text-3xl  rounded  p-1 opacity-80 text-2xl `}
      >
        {day.isCelsius
          ? `${day.minTemperature}°C - ${day.maxTemperature}°C`
          : `${day.minTemperature}°F - ${day.maxTemperature}°F`}
      </h3>
    </div>
  );
};
export default Card;