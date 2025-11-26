import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_URL } from "../services/auth";

function DashboardRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = DASHBOARD_URL;
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm p-4">
            <h2 className="mb-3">Taking you to your dashboard</h2>
            <p className="text-muted mb-4">
              Hang tight — we're opening the full Zerodha console. If nothing
              happens, click the button below.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a
                href={DASHBOARD_URL}
                className="btn btn-primary"
              >
                Go to dashboard
              </a>
              <button
                className="btn btn-outline-secondary"
                onClick={() => navigate("/")}
              >
                Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardRedirect;

