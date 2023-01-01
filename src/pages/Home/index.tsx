import { Play } from "phosphor-react";
import React from "react";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <form action="" className="flex flex-col items-center gap-[3.5rem]">
        <div className="flex w-full items-center justify-center gap-[0.5rem] text-gray-100 text-xl font-bold flex-wrap">
          <label htmlFor="task">Vou trabalhar em </label>
          <input
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            className="bg-transparent h-[2.5rem]  border-b-2 border-gray-500 text-xl py-0 px-2 text-gray-100 flex-1 placeholder:text-gray-500 focus:shadow-none focus:border-green-500"
          />
          <label htmlFor="minutesAmount">Durante</label>
          <input
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            className="bg-transparent h-[2.5rem] border-b-2 border-gray-500 text-xl py-0 px-2 text-gray-100 w-16  placeholder:text-gray-500 focus:shadow-none  focus:border-green-500"
          />
          <span>Minutos</span>
        </div>
        <div className="font-[Roboto Mono] text-[10rem] leading-[8rem] flex gap-4">
          <span className="bg-gray-700 text-white px-8 py-4 rounded-lg flex justify-center items-center">
            0
          </span>
          <span className="bg-gray-700 text-white  px-8 py-4 rounded-lg flex justify-center items-center">
            0
          </span>
          <span className="py-8 px-none text-green-500 w-16 overflow-hidden flex justify-center">
            :
          </span>
          <span className="bg-gray-700 text-white px-8 py-4 rounded-lg flex justify-center items-center">
            0
          </span>
          <span className="bg-gray-700 text-white  px-8 py-4 rounded-lg flex justify-center items-center">
            0
          </span>
        </div>
        <button className="border-none p-4 rounded-lg flex items-center justify-center gap-[0.5rem] font-bold cursor-pointer bg-green-500 text-green-100 hover:bg-green-700 w-full">
          <Play size={24} /> Começar
        </button>
      </form>
    </div>
  );
};

export default Home;
