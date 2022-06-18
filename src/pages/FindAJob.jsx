import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleJob from "./SingleJob";

const FindAJob = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        "https://shrouded-taiga-82272.herokuapp.com/jobs"
      );
      setJobs(data);
    })();
  }, []);
  console.log(jobs);
  return (
    <div className="my-24 lg:mx-[10%]">
      <p className="text-3xl  mb-6">Discover Job</p>
      <div className="flex flex-col gap-6">
        {jobs.map((job, i) => (
          <SingleJob key={i} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FindAJob;
