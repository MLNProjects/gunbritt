import axios, { AxiosResponse } from "axios";

export const signInWithEmailAndPassword = (email: string, password: string): Promise<AxiosResponse<any>> => {
  return axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUYuBxb_dIqdNFdF9SMUlO7-vkPEDhqic",
    {
      email,
      password,
      returnSecureToken: true
    }
  );
};
