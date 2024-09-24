import { baseUrl } from "../../config/config";

export type TBasicResponse<T> = {
  data: T;
};

export type TContactResponse = {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const asyncGetAllContact = async () => {
  try {
    const response = await baseUrl.get(`/api/v1/contact-us`);
    const data: TBasicResponse<TContactResponse[]> = await response.data;
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteContact = async (contactId: number) => {
  try {
    const response = await baseUrl.delete(`/api/v1/contact-us/${contactId}`);
    const data: TBasicResponse<TContactResponse> = await response.data;
    return data.data;
  } catch (error) {
    console.log("Error deleting contact:", error);
  }
};
