import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../services/auth";

function Signup() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formValues.password.length < 6) {
      setStatus({
        loading: false,
        message: "",
        error: "Password must be at least 6 characters long.",
      });
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      setStatus({
        loading: false,
        message: "",
        error: "Passwords do not match.",
      });
      return;
    }

    try {
      await signupUser({
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password,
      });
      setStatus({
        loading: false,
        message: "Signup successful! Redirecting to home...",
        error: "",
      });
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      setStatus({
        loading: false,
        message: "",
        error: error.message || "Signup failed",
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
                <h2 className="mb-2 text-center">Create your account</h2>
                <p className="text-muted text-center mb-4">
                  Start investing in minutes. Already have an account?{" "}
                  <Link to="/login">Login</Link>
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
                    <label htmlFor="name" className="form-label">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="e.g. Nithin Kamath"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

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

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Min 6 characters"
                        value={formValues.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Re-enter password"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 mt-2"
                    disabled={status.loading}
                  >
                    {status.loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Creating account...
                      </>
                    ) : (
                      "Create account"
                    )}
                  </button>
                </form>

                <p className="text-muted text-center mt-4 mb-0" style={{ fontSize: "0.8rem" }}>
                  By signing up, you agree to our{" "}
                  <a href="#terms" style={{ color: "#4184f3" }}>Terms of Service</a> and{" "}
                  <a href="#privacy" style={{ color: "#4184f3" }}>Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;