import { signup } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useState } from "react";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signup(user, history));
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>SignUp Form</h1>
      <div className="mb-3">
        <label className="form-label">username</label>
        <input
          type="text"
          value={user.username}
          onChange={handleChange}
          name="username"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">password</label>
        <input
          type="password"
          value={user.password}
          onChange={handleChange}
          name="password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">email</label>
        <input
          type="email"
          value={user.email}
          onChange={handleChange}
          name="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">firstName</label>
        <input
          type="text"
          value={user.firstName}
          onChange={handleChange}
          name="firstName"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">lastName</label>
        <input
          type="text"
          value={user.lastName}
          onChange={handleChange}
          name="lastName"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-info float-right">
        SignUp
      </button>
    </form>
  );
};

export default Signup;
