import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  axios
    .post(
      "https://secret-family-recipes-8.herokuapp.com/api/auth/validateToken",
      token
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://secret-family-recipes-8.herokuapp.com/",
  });
};

export default axiosWithAuth;
