import React, { useEffect, useMemo, useState } from "react";
import { HandPalm, Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { find, isEmpty, isEqual, map } from "lodash";
import { differenceInSeconds } from "date-fns";

interface IFormData {
  id: string;
  task: string;
  minutesAmount: number;
}

interface ICycleProps {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

const Home: React.FC = () => {
  const [newCycle, setNewCycle] = useState<ICycleProps[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<IFormData>({
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });
  const watchTask = watch("task");
  const watchMinutesAmount = watch("minutesAmount");

  const onSubmit = (data: IFormData) => {
    const id = String(new Date().getTime());
    const newCycle: ICycleProps = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    setNewCycle((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
    reset();
  };

  const activeCycle = find(newCycle, (item) => isEqual(item.id, activeCycleId));
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;
  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  const handleInterruptedCycle = () => {
    setNewCycle(
      map(newCycle, (cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  };

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );
        if (secondsDifference >= totalSeconds) {
          setNewCycle(
            map(newCycle, (cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() };
              } else {
                return cycle;
              }
            })
          );
          setAmountSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setAmountSecondsPassed(secondsDifference);
        }
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  useEffect(() => {
    console.log("newCycle", newCycle);
  }, [newCycle]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col items-center gap-[3.5rem]"
      >
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

        {activeCycle ? (
          <button
            onClick={handleInterruptedCycle}
            type="button"
            className="flex w-full cursor-pointer items-center justify-center gap-[0.5rem] rounded-lg border-none bg-red-500 p-4 font-bold text-green-100 hover:bg-red-700 "
          >
            <HandPalm size={24} /> Interromper
          </button>
        ) : (
          <button
            type="submit"
            disabled={Boolean(
              isEmpty(watchTask) || isEmpty(watchMinutesAmount)
            )}
            className="flex w-full cursor-pointer items-center justify-center gap-[0.5rem] rounded-lg border-none bg-green-500 p-4 font-bold text-green-100 hover:bg-green-700 disabled:bg-gray-300 disabled:text-gray-800"
          >
            <Play size={24} /> Começar
          </button>
        )}
      </form>
    </div>
  );
};

export default Home;
