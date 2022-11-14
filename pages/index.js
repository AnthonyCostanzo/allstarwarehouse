import Head from "next/head";
import Image from "next/image";
import UserList from "../components/UserList";
import InventoryList from "../components/InventoryList";
import { useEffect, useState } from "react";
export default function Home() {
  return (
    <>
      <div className="text-center md:w-10/12 m-auto pb-20 ">
        <div className="group w-fit m-auto">
          <h1 className="text-2xl text-center mt-10 group-hover:animate-bounce  ">
            THE WAREHOUSE MANAGER
          </h1>
        </div>

        <div className="mt-10">
          <div className="bg-gradient-to-br rounded-b-md from-sky-300 to-sky-100 p-3 w-1/2 space-y-2 m-auto min-w-max">
            <h3 className="text-xl">Welcome to the Admin Portal</h3>
            <p>Here is where you can manage and view your inventory</p>
          </div>
          <div className="mt-10">
            <h1 className="mb-5 font-semibold text-xl">ACTIVE USERS</h1>
            {/* <UserList /> */}
          </div>
          <InventoryList />
        </div>
      </div>
    </>
  );
}
