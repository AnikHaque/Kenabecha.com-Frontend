import jwtDecode from "jwt-decode";

const getToken = () => {
  // Check if token exists in localStorage
  const localStorageToken = localStorage.getItem("token");
  if (localStorageToken) {
    return localStorageToken;
  }

  // If token not found in localStorage, check cookies
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));
  if (cookieValue) {
    return cookieValue.split("=")[1];
  }

  // If token not found in cookies or localStorage, return null
  return null;
};

const setToken = (token) => {
  localStorage.setItem("token", token);

  // Set token as a cookie
  document.cookie = `token=${token}; path=/; SameSite=Strict`;
};

const removeToken = () => {
  localStorage.removeItem("token");
};

const decodeToken = () => {
  const token = getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};

export { getToken, setToken, removeToken, decodeToken };
