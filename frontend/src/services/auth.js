const API_BASE_URL =
  process.env.REACT_APP_API_URL || process.env.REACT_APP_API_BASE_URL;

export const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL || process.env.REACT_APP_LANDING_URL;

const handleResponse = async (response) => {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.message || "Unexpected error, please try again.");
  }
  return payload;
};

export const signupUser = async ({ name, email, password }) => {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  return handleResponse(response);
};

export const loginUser = async ({ email, password }) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return handleResponse(response);
};

