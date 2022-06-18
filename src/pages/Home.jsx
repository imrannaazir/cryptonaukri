import React, { useEffect, useState } from "react";
import flag from "../assets/india.svg";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import axios from "axios";

const Home = () => {
  const [user] = useAuthState(auth);
  const [account, setAccount] = useState({});
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://shrouded-taiga-82272.herokuapp.com/account/${user?.email}`
      );

      setAccount(data);
    })();
  }, [user?.email]);
  console.log(account?.account_type);
  return (
    <div className=" bg-base-200">
      <div className="lg:min-h-screen flex flex-col lg:flex-row mt-24  justify-between items-center px-[10%]">
        <div>
          <h1 className=" text-3xl lg:text-6xl ">Towards the</h1>
          <h1 className="text-transparent text-4xl lg:text-8xl bg-clip-text bg-gradient-to-b from-primary to-secondary transform duration-200 hover:scale-105">
            Revolution
          </h1>
          <p className="py-6 flex gap-2 text-lg font-bold">
            <img className="w-4 rounded-md" src={flag} alt="" /> India's first
            crypto job website
          </p>
          <div className="flex gap-8">
            {account?.account_type === "company" ? (
              <Link
                to="/post-job"
                className="btn  btn-outline rotate-3 capitalize text-lg transform duration-200 hover:bg-transparent hover:text-white hover:scale-110 rounded-md "
              >
                Post a Job
              </Link>
            ) : (
              <Link
                to="/find-job"
                className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white rotate-3 capitalize text-lg hover:scale-110 rounded-md"
              >
                Find a Job
              </Link>
            )}
          </div>
        </div>
        <img
          src="https://iili.io/VkREcx.md.png"
          className="max-w-sm rounded-lg transform duration-200 hover:scale-110"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
