import React from "react";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading";

const Register = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isRadioSelected, setIsRadioSelected] = useState(id);
  const [createUserWithEmailAndPassword, eUser, eLoading, eError] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  // watch pass
  const password = watch("password");

  // form handle
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data?.email, data?.password);
    reset();
    toast.success("successfully Registered!");
  };

  if (eLoading) {
    return <Loading />;
  }
  if (eError) {
    console.log(eError);
    toast.error(eError.message);
  }
  if (eUser) {
    navigate("/" + isRadioSelected + "-account");
  }

  return (
    <div className=" bg-base-200">
      <div className="min-h-screen flex justify-center items-center lg:px-[10%]">
        <img
          src="https://iili.io/Vk565Q.md.png"
          className=" rounded-lg hidden lg:block"
          alt=""
        />
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <p className="text-2xl text-white text-center">Register as</p>
            <form className="flex items-center gap-4 mb-6 justify-center">
              <input
                className="radio radio-secondary"
                type="radio"
                name=""
                id="student"
                value="student"
                checked={isRadioSelected === "student"}
                onChange={() => {
                  navigate("/register/student");
                  setIsRadioSelected("student");
                }}
              />
              <label htmlFor="student">Student</label>
              <input
                className="radio radio-secondary"
                type="radio"
                name=""
                id="company"
                value="company"
                checked={isRadioSelected === "company"}
                onChange={() => {
                  navigate("/register/company");
                  setIsRadioSelected("company");
                }}
              />
              <label htmlFor="company">Company</label>
            </form>

            {/* form */}
            <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
              {/* email field */}
              <div className="form-control">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: "invalid email",
                    },
                  })}
                  type="text"
                  placeholder="Enter email"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* password field */}
              <div className="form-control">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "password must have at least 6 characters!",
                    },
                  })}
                  type="password"
                  placeholder="Create password"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {/*confirm password field */}
              <div className="form-control">
                <input
                  {...register("confirm_password", {
                    required: {
                      value: true,
                      message: "confirm password is required",
                    },
                    validate: (value) =>
                      value === password || "passwords do not match!",
                  })}
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.confirm_password?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.confirm_password.message}
                    </span>
                  )}
                  {errors.confirm_password?.type === "validate" && (
                    <span className="label-text-alt text-error">
                      {errors.confirm_password.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary border-0 w-full max-w-xs">
                  Register
                </button>

                <p className="text-center text-white">
                  Already a member?{" "}
                  <Link className="text-secondary" to="/login">
                    Please log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
