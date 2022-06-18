import React from "react";
import { useForm } from "react-hook-form";

const PostAJob = () => {
  //hook form
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  // form handle
  const onSubmit = async (data) => {
    console.log(data);

    reset();
  };
  return (
    <div className="flex justify-center items-center ">
      <div class="card-body max-w-md flex justify-center items-center shadow-2xl bg-base-300 m-8 mt-24">
        <p className="text-2xl">Post a Job</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          {/* name */}
          <p className="text-xl">Job title</p>
          <div className="lg:flex gap-4">
            {/* first name */}
            <div className="form-control ">
              <input
                {...register("job_title", {
                  required: {
                    value: true,
                    message: "job title is required",
                  },
                })}
                type="text"
                placeholder="Enter job title"
                className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
              />
              <label className="label">
                {errors.job_title?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.job_title.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* profile link */}
          <p className="text-xl">Salary</p>
          <div className="lg:flex gap-4">
            {/* LinkedIn */}
            <div className="form-control ">
              <input
                {...register("salary", {
                  required: {
                    value: true,
                    message: "salary is required",
                  },
                })}
                type="text"
                placeholder="Enter salary"
                className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
              />
              <label className="label">
                {errors.salary?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.salary.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/*  */}
          {/* Education */}
          <p className="text-xl">Experience</p>
          <div className="lg:flex gap-4">
            {/* LinkedIn */}
            <div className="form-control ">
              <input
                {...register("experience", {
                  required: {
                    value: true,
                    message: "experience is required",
                  },
                })}
                type="text"
                placeholder="Enter experience"
                className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
              />
              <label className="label">
                {errors.experience?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.experience.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/*  */}
          <div className="form-control ">
            <p className="text-xl">About job</p>
            <textarea
              {...register("job_description", {
                required: {
                  value: true,
                  message: "job description is required",
                },
              })}
              type="text"
              placeholder="Job description"
              className="input input-bordered w-full max-w-xs lg:w-[350px] h-24 rounded-sm py-2 "
            />
            <label className="label">
              {errors.job_description?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.job_description.message}
                </span>
              )}
            </label>
          </div>

          <button className="btn rounded-sm bg-gradient-to-r from-primary to-secondary text-white border-0 max-w-xs lg:w-[350px]">
            Post
          </button>
        </form>
      </div>
      <img
        className="w-[600px] h-[600px]"
        src="https://i.ibb.co/MGxCzQb/flame-remote-work-1.png"
        alt=""
      />
    </div>
  );
};

export default PostAJob;
