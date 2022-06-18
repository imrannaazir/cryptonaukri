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
        `http://localhost:5000/account/${user?.email}`
      );

      setAccount(data);
    })();
  }, [user?.email]);
  console.log(account?.account_type);
  return (
    <div class=" bg-base-200">
      <div class="min-h-screen flex justify-between items-center lg:px-[10%]">
        <div>
          <h1 class="text-6xl ">Towards the</h1>
          <h1 class="text-transparent text-8xl bg-clip-text bg-gradient-to-b from-primary to-secondary transform duration-200 hover:scale-105">
            Revolution
          </h1>
          <p class="py-6 flex gap-2 text-lg font-bold">
            <img className="w-4 rounded-md" src={flag} alt="" /> India's first
            crypto job website
          </p>
          <div className="flex gap-8">
            {account?.account_type === "company" ? (
              <Link
                to="/post-job"
                class="btn  btn-outline rotate-3 capitalize text-lg transform duration-200 hover:bg-transparent hover:text-white hover:scale-110 rounded-md "
              >
                Post a Job
              </Link>
            ) : (
              <Link
                to="/find-job"
                class="btn bg-gradient-to-r from-primary to-secondary border-0 text-white rotate-3 capitalize text-lg hover:scale-110 rounded-md"
              >
                Find a Job
              </Link>
            )}
          </div>
        </div>
        <img
          src="https://iili.io/VkREcx.md.png"
          class="max-w-sm rounded-lg transform duration-200 hover:scale-110"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
