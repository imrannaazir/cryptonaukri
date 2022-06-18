import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import axios from "axios";
import Applicant from "./Applicant";

const Applicants = () => {
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

  const url = `http://localhost:5000/applications/${account?.website}`;
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(url);
      setApplicants(data);
    })();
  }, [url]);
  return (
    <div className="mt-24 lg:mx-[10%]">
      <p className="text-4xl mb-6">Applicants</p>
      <div>
        {applicants.map((applicant, i) => (
          <Applicant key={i} applicant={applicant} />
        ))}
      </div>
    </div>
  );
};

export default Applicants;
