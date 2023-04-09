import React from "react";

interface IFormContainerProps {
  register: any;
  activeCycle: any;
}

const FormContainer: React.FC<IFormContainerProps> = ({
  register,
  activeCycle,
}) => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-[0.5rem] text-xl font-bold text-gray-100">
      <label htmlFor="task">Vou trabalhar em </label>
      <input
        {...register("task")}
        type="text"
        id="task"
        disabled={Boolean(activeCycle)}
        placeholder="Dê um nome para o seu projeto"
        className="h-[2.5rem] flex-1 border-b-2  border-gray-500 bg-transparent px-2 py-0  text-xl text-gray-100 placeholder:text-gray-500 focus:border-green-500 focus:shadow-none"
      />
      <label htmlFor="minutesAmount">Durante</label>
      <input
        disabled={Boolean(activeCycle)}
        {...register("minutesAmount")}
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        className="h-[2.5rem] w-16 border-b-2 border-gray-500 bg-transparent  px-2 py-0 text-xl  text-gray-100 placeholder:text-gray-500  focus:border-green-500 focus:shadow-none"
      />
      <span>Minutos</span>
    </div>
  );
};

export default FormContainer;
