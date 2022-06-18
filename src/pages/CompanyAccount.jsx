import React from "react";
import { useForm } from "react-hook-form";

const CompanyAccount = () => {
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
    <div className="flex flex-col items-start p-8 justify-start mt-24 lg:mx-[10%] bg-base-300">
      <p className="text-2xl mb-6">Update Company Info</p>
      {/* form started */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {/* name */}
        <div className="lg:flex gap-4">
          {/* company  name */}
          <div className="form-control ">
            <input
              {...register("company", {
                required: {
                  value: true,
                  message: "company name is required",
                },
              })}
              type="text"
              placeholder="Enter company name"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.company?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.company.message}
                </span>
              )}
            </label>
          </div>
          {/* address  */}
          <div className="form-control ">
            <input
              {...register("address", {
                required: {
                  value: true,
                  message: "address is required",
                },
              })}
              type="text"
              placeholder="Enter company address"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.address?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.address.message}
                </span>
              )}
            </label>
          </div>
        </div>

        {/* profile link */}
        <p className="text-xl">Link</p>
        <div className="lg:flex gap-4">
          {/* LinkedIn */}
          <div className="form-control ">
            <input
              {...register("website", {
                required: {
                  value: true,
                  message: "website url is required",
                },
              })}
              type="text"
              placeholder="Enter website url"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.website?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.website.message}
                </span>
              )}
            </label>
          </div>
          {/* phone */}
          <div className="form-control ">
            <input
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "linkedin url is required",
                },
              })}
              type="text"
              placeholder="Enter linkedin url"
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
        </div>

        {/*  */}
        {/* company info */}
        <p className="text-xl">More Info</p>
        <div className="lg:flex gap-4">
          {/* employees */}
          <div className="form-control ">
            <input
              {...register("employees", {
                required: {
                  value: true,
                  message: "employees is required",
                },
              })}
              type="text"
              placeholder="number of employees"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.employees?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.employees.message}
                </span>
              )}
            </label>
          </div>
          {/*  company type */}
          <div className="form-control ">
            <input
              {...register("company_type", {
                required: {
                  value: true,
                  message: "company type is required",
                },
              })}
              type="text"
              placeholder="Enter company type"
              className="input input-bordered w-full max-w-xs lg:w-[350px] rounded-sm"
            />
            <label className="label">
              {errors.company_type?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.company_type.message}
                </span>
              )}
            </label>
          </div>
        </div>

        {/*  */}
        <div className="form-control ">
          <p className="text-xl">About company</p>
          <textarea
            {...register("about", {
              required: {
                value: true,
                message: "about is required",
              },
            })}
            type="text"
            placeholder="Tell about company"
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

export default CompanyAccount;
