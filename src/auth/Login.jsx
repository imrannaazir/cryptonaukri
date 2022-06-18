import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading";

const Login = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // useCreateWith email and pass
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  //hook form
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  // watch pass

  // form handle
  const onSubmit = async (data) => {
    console.log(data);
    signInWithEmailAndPassword(data?.email, data?.password);
    reset();
  };
  //if loading
  if (loading) {
    return <Loading />;
  }
  //if error
  if (error) {
    console.log(error);
    toast.error(error.message);
  }
  //if user
  if (user) {
    navigate(from);
    toast.success("Successfully Logged in!");
  }

  return (
    <div class=" bg-base-200">
      <div class="min-h-screen flex justify-center items-center lg:px-[10%]">
        <img src="https://iili.io/Vk565Q.md.png" class=" rounded-lg " alt="" />
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="flex flex-col">
            <FontAwesomeIcon
              className="text-base-300 text-9xl pt-6"
              icon={faUser}
            />
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
              {/* email field */}
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
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
                  class="input input-bordered w-full "
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span class="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* password field */}
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
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
                  placeholder="Enter password"
                  class="input input-bordered w-full "
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span class="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <div class="form-control mt-6">
                <button class="btn bg-gradient-to-r border-0 text-white from-primary to-secondary">
                  Login
                </button>
                <p className="text-center">
                  New to here?register(
                  <Link to="/register/student" className="text-secondary">
                    Student
                  </Link>
                  /
                  <Link to="/register/company" className="text-secondary">
                    Company
                  </Link>
                  )
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
