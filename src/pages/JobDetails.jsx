import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const JobDetails = () => {
  const navigate = useNavigate();
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
  const { id } = useParams();
  const [job, setJob] = useState({});
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://shrouded-taiga-82272.herokuapp.com/jobs/${id}`
      );
      setJob(data);
    })();
  }, [id]);
  const {
    job_title,
    company,
    link,
    email,
    date,
    job_description,
    experience,
    salary,
  } = job;

  //hook form

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });
  const { _id, account_type, ...rest } = account;
  const onSubmit = async (data) => {
    const applicant = {
      ...rest,
      ...data,
      website_link: link,
      job_title: job_title,
    };
    (async function () {
      const { data } = await axios.post(
        "https://shrouded-taiga-82272.herokuapp.com/applications",
        applicant
      );
      console.log(data);
      if (data.insertedId) {
        toast.success("Successfully applied!");
        navigate("/");
      }
    })();
  };

  return (
    <div>
      <div className="card mt-24 lg:mx-[10%] bg-base-300 shadow-3xl">
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company}</p>
          <p>{date}</p>
          <div className="divider" />
          <p className="text-2xl">About job</p>
          <p> {job_description}</p>
          <p>Experience: {experience}</p>
          <p>Salary: {salary}</p>
          <div className="divider" />
          <p className="text-2xl">About Company</p>
          <p>website: {link}</p>
          <p>Email: {email}</p>
          <div className="card-actions justify-end">
            <label
              htmlFor="my-modal-3"
              className="btn bg-gradient-to-r from-primary to-secondary text-white border-0 rounded-sm modal-button"
            >
              Apply{" "}
            </label>
          </div>
        </div>
      </div>

      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Your Application </h3>
          <div className="divider" />
          <p className="py-4">
            {account?.first_name + " " + account?.last_name}
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <p>Let them know why you are a good fit.</p>
            <textarea
              {...register("cover_letter", {
                required: {
                  value: true,
                  message: "cover letter is required",
                },
              })}
              type="text"
              placeholder=" Write note to HR"
              className="input input-bordered w-full max-w-xs lg:w-[350px] h-24 rounded-sm py-2 "
            />
            <label className="label">
              {errors.cover_letter?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.cover_letter.message}
                </span>
              )}
            </label>

            <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-0 rounded-sm modal-button w-[200px]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
