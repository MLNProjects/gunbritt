import axios from "axios";

export const postUserInformation = (
  userid: string,
  bearer: string,
  name: string,
  phoneNumber: string,
  radius: number,
  description: string,
  location: number[],
  type: string
) => {
  return axios.post(
    "https://randomurl.com",
    {
      userId: userid,
      name: name,
      phoneNumber: phoneNumber,
      radius: radius,
      description: description,
      location: {
        latitude: location[0],
        longitude: location[1]
      },
      type: type
    },
    {
      headers: {
        Authorisation: `Bearer ${bearer}`
      }
    }
  );
};
