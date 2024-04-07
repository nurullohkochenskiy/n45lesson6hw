import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../components/Auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const { login } = useAuth();
  const onSubmit = (values) => {
    if (values.username.length >= 3 && values.password.length >= 3) {
      const data = { username: values.username, password: values.password };
      login(data);
      navigate("/");
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "username is required",
                },
              })}
              // value={values.username}
              className={errors.username ? "error" : ""}
            />
            {errors.username && (
              <span className="error-text">{errors.username.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
              })}
              // value={values.password}
              // onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <span className="error-text">{errors.password.message}</span>
            )}
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
