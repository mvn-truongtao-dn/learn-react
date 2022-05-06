import React from "react";
import { Link } from "react-router-dom";
import FormUser from "../../../components/modules/FormUser";
import useField from "../../../hooks/useField";
import useAuth from "../../../hooks/userAuth";

export default function Login() {
  const email = useField("text", "");
  const password = useField("password", "");
  const { login } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <FormUser handleSubmit={handleSubmit}>
      <div className="row">
        <label htmlFor="email">Email</label>
        <div className="col-12">
          <input {...email} />
        </div>
      </div>
      <div className="row">
        <label htmlFor="password">Password</label>
        <div className="col-12">
          <input {...password} />
        </div>
      </div>
      <div className="col-12">
        <input type="submit" value="Submit" />
      </div>
      <div className="row">
        <Link className="btn-register" to="/auth/register">
          Register
        </Link>
      </div>
    </FormUser>
  );
}
