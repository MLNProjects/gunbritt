import axios, { AxiosResponse } from "axios";

export const signUpWithEmailAndPassword = (email: string, password: string): Promise<AxiosResponse<any>> => {
  return axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUYuBxb_dIqdNFdF9SMUlO7-vkPEDhqic",
    {
      email,
      password,
      returnSecureToken: true
    }
  );
};
