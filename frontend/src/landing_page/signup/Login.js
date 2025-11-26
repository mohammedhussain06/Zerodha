import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";

function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  const handleChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const { token } = await loginUser({
        email: formValues.email.trim(),
        password: formValues.password,
      });
      localStorage.setItem("zerodha_token", token);
      setStatus({
        loading: false,
        message: "Login successful! Redirecting to dashboard...",
        error: "",
      });
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 500);
    } catch (error) {
      setStatus({
        loading: false,
        message: "",
        error: error.message || "Login failed",
      });
    }
  };

  return (
    <section className="auth-wrapper">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="text-center mb-4">
              <Link to="/">
                <img
                  src="media/images/logo.svg"
                  alt="Zerodha"
                  style={{ height: "32px" }}
                />
              </Link>
            </div>
            <div className="card auth-card">
              <div className="card-body">
                <h2 className="mb-2 text-center">Welcome back</h2>
                <p className="text-muted text-center mb-4">
                  New to Zerodha? <Link to="/signup">Create an account</Link>
                </p>

                {status.error && (
                  <div className="alert alert-danger" role="alert">
                    {status.error}
                  </div>
                )}
                {status.message && (
                  <div className="alert alert-success" role="alert">
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="name@email.com"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <label htmlFor="password" className="form-label mb-0">
                        Password
                      </label>
                      <a href="#forgot" style={{ fontSize: "0.85rem", color: "#4184f3", textDecoration: "none" }}>
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control mt-2"
                      placeholder="Enter your password"
                      value={formValues.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={status.loading}
                  >
                    {status.loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Signing in...
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                    Protected by industry-standard encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

