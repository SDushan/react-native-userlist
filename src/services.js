import axios from 'axios';

const BASE_URI = "https://reqres.in/api";

export const getUsersfromApi = () => (
  axios.get(`${BASE_URI}/users`, {
    params: {
      page:1,
      per_page:12
    }
  })
)