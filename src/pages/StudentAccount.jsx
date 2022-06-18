import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import { useNavigate } from "react-router";

const StudentAccount = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  //hook form
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  // form handle
  const onSubmit = async (data) => {
    const newApplicant = {
      ...data,
      email: user?.email,
      account_type: "applicant",
    };
    // post applicant to db
    (async function () {
      const { data } = await axios.post(
        "https://shrouded-taiga-82272.herokuapp.com/account",
        newApplicant
      );
      console.log(data);
      if (data.insertedId) {
        toast.success("Successfully updated!");
        navigate("/");
      }
    })();
    reset();
  };
  return (
    <div className="flex flex-col items-start p-8 justify-start mt-24 lg:mx-[10%] bg-base-300">
      <p className="text-2xl mb-6">Update your profile</p>
      {/* form started */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {/* name */}
        <p className="text-xl">Name</p>
        <div className="lg:flex gap-4">
          {/* first name */}
          <div className="form-control ">
            <input
              {...register("first_name", {
                required: {
                  value: true,
                  message: "first name is required",
                },
              })}
              type="text"
              placeholder="Enter your first name"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.first_name?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.first_name.message}
                </span>
              )}
            </label>
          </div>
          {/* last name */}
          <div className="form-control ">
            <input
              {...register("last_name", {
                required: {
                  value: true,
                  message: "last name is required",
                },
              })}
              type="text"
              placeholder="Enter your last name"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.last_name?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.last_name.message}
                </span>
              )}
            </label>
          </div>
        </div>

        {/* profile link */}
        <p className="text-xl">Profile Link</p>
        <div className="lg:flex gap-4">
          {/* LinkedIn */}
          <div className="form-control ">
            <input
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "LinkedIn url is required",
                },
              })}
              type="text"
              placeholder="Enter your LinkedIn url"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.linkedin?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.linkedin.message}
                </span>
              )}
            </label>
          </div>
          {/* phone */}
          <div className="form-control ">
            <input
              {...register("phone", {
                required: {
                  value: true,
                  message: "phone number is required",
                },
              })}
              type="text"
              placeholder="Enter your phone number"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.phone?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>
        </div>

        {/*  */}
        {/* Education */}
        <p className="text-xl">Education</p>
        <div className="lg:flex gap-4">
          {/* LinkedIn */}
          <div className="form-control ">
            <input
              {...register("subject", {
                required: {
                  value: true,
                  message: "subject is required",
                },
              })}
              type="text"
              placeholder="Enter your subject"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.subject?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.subject.message}
                </span>
              )}
            </label>
          </div>
          {/* github link */}
          <div className="form-control ">
            <input
              {...register("university", {
                required: {
                  value: true,
                  message: "university is required",
                },
              })}
              type="text"
              placeholder="Enter your university"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.university?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.university.message}
                </span>
              )}
            </label>
          </div>
        </div>

        {/*  */}
        <div className="form-control ">
          <p className="text-xl">About yourself</p>
          <textarea
            {...register("about", {
              required: {
                value: true,
                message: "about is required",
              },
            })}
            type="text"
            placeholder="Tell about yourself"
            className="input input-bordered w-full h-24 rounded-sm py-2 "
          />
          <label className="label">
            {errors.about?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.about.message}
              </span>
            )}
          </label>
        </div>

        <button className="btn rounded-sm bg-gradient-to-r from-primary to-secondary text-white border-0">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default StudentAccount;
