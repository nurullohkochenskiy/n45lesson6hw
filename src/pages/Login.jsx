import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const form = useForm();
  const { register } = form;
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              {...register("username")}
              // value={values.username}
              // className={errors.username ? 'error' : ''}
            />
            {/* {errors.username && <span className="error-text">{errors.username}</span>} */}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              // value={values.password}
              // onChange={handleChange}
              // className={errors.password ? 'error' : ''}
            />
            {/* {errors.password && <span className="error-text">{errors.password}</span>} */}
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
