import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

// import { Container } from './styles';

const DefaultLayout: React.FC = () => {
  return (
    <div
      className="max-w-[74rem] my-[5rem] mx-auto p-[2.5rem] bg-gray-800 rounded-lg flex flex-col"
      style={{ height: "calc(100vh - 10rem)" }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
