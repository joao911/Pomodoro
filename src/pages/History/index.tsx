import React from "react";

// import { Container } from './styles';

const History: React.FC = () => {
  return (
    <main className="flex-1 p-[3.5rem] flex flex-col">
      <h1 className="text-lg text-gray-100">Meu histórico</h1>
      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w[600px]">
          <thead>
            <tr>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-[.875rem] leading-[1.6] rounded-tl-lg pl-6 ">
                Tarefa
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-[.875rem] leading-[1.6]  ">
                Duração
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-[.875rem] leading-[1.6]  ">
                Início{" "}
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-[.875rem] leading-[1.6] rounded-tr-lg pr-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="bg-gray-700 border-t-4 border-t-gray-800 p-4 text-[0.875rem] leading-[1.6] pl-6 text-gray-300"
                style={{ width: "50%" }}
              >
                Tarefa
              </td>
              <td className="bg-gray-700 border-t-4 border-t-gray-800 p-4 text-[0.875rem] leading-[1.6] text-gray-300">
                20 minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-t-gray-800 p-4 text-[0.875rem] leading-[1.6] text-gray-300">
                há 2 meses{" "}
              </td>
              <td className="bg-gray-700 border-t-4 border-t-gray-800 p-4 text-[0.875rem] leading-[1.6] pr-6 text-gray-300 ">
                <div className="flex  items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  Concluído
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default History;
