import React, { useState } from "react";

// import { Container } from './styles';

interface ICountdownContainerProps {
  minutes: string;
  seconds: string;
}
const CountdownContainer: React.FC<ICountdownContainerProps> = ({
  minutes,
  seconds,
}) => {
  return (
    <div className="font-[Roboto Mono] flex gap-4 text-[10rem] leading-[8rem]">
      <span className=" flex items-center justify-center rounded-lg bg-gray-700 px-8 py-4  text-white">
        {minutes[0]}
      </span>
      <span className="flex items-center  justify-center rounded-lg bg-gray-700 px-8 py-4 text-white">
        {minutes[1]}
      </span>
      <span className="px-none flex w-16 justify-center overflow-hidden py-8 text-green-500">
        :
      </span>
      <span className="flex items-center justify-center rounded-lg bg-gray-700 px-8 py-4 text-white">
        {seconds[0]}
      </span>
      <span className="flex items-center  justify-center rounded-lg bg-gray-700 px-8 py-4 text-white">
        {seconds[1]}
      </span>
    </div>
  );
};

export default CountdownContainer;
