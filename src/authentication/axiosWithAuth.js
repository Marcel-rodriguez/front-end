import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "https://secret-family-recipes-8.herokuapp.com/"
    })
}

export default axiosWithAuth;