import { baseUrl } from "../../config/config";

export type TBasicResponse<T> = {
  data: T;
};

export type TUser = {
  id?: number;

  name: string;
  email: string;
  password: string;
  phoneNo: number;
};
export type TAddUser = TUser;

export const asyncAdminLogin = async (data: TUser) => {
  try {
    console.log("data", data);

    // Perform the login request
    const loginUser = await baseUrl.post("/api/v1/login", data);

    // Store token and user data in localStorage
    localStorage.setItem("token", loginUser.data.token);
    localStorage.setItem("user", JSON.stringify(loginUser.data.data));

    return loginUser.data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const asyncGetAllUsers = async () => {
  try {
    const response = await baseUrl.get(`/api/v1/users`);
    const data: TBasicResponse<TUser[]> = await response.data;

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const asyncAddUser = async (data: TAddUser) => {
  try {
    const User = await baseUrl.post("/api/v1/user", data);
    return User.data;
  } catch (error) {
    console.error("Error adding User:", error);
  }
};

export const asyncDeleteUser = async (userId: number) => {
  try {
    const response = await baseUrl.delete(`/api/v1/user/${userId}`);
    const data: TBasicResponse<TUser> = await response.data;
    return data.data;
  } catch (error) {
    console.log("Error deleting userId:", error);
  }
};
