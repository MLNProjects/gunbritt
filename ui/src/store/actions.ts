import { SET_TOKEN_AND_USERID } from "./type";

interface DataProp {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
export const setTokenAndUser = (data: DataProp) => {
  return {
    type: SET_TOKEN_AND_USERID,
    payload: { idToken: data.idToken, email: data.email, refreshToken: data.refreshToken, expiresIn: data.expiresIn, userId: data.localId }
  };
};
