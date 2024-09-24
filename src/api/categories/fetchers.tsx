import { baseUrl } from "../../config/config";
import { axiosError } from "../../lib/axios-error";
import toast from "react-hot-toast";

export type TBasicResponse<T> = {
  data: T;
};

export type TCategoryResponse = {
  id?: number;
  name: string;
};

export type TAddCategory = TCategoryResponse;

export const asyncGetAllCategory = async () => {
  try {
    const response = await baseUrl.get(`/api/v1/category`);
    const data: TBasicResponse<TCategoryResponse[]> = await response.data;
    return data.data;
  } catch (error) {
    throw toast.error(axiosError(error));
  }
};

export const asyncCategoryById = async (categoryId: number) => {
  try {
    const response = await baseUrl.get(`/api/v1/category/${categoryId}`);
    const data: TBasicResponse<TCategoryResponse> = await response.data;
    return data.data;
  } catch (error) {
    throw toast.error(axiosError(error));
  }
};

export const asyncSearchCategory = async (query: string) => {
  try {
    const response = await baseUrl.get(`/api/v1/category/search?query${query}`);
    const data: TBasicResponse<TCategoryResponse> = await response.data;
    return data.data;
  } catch (error) {
    throw toast.error(axiosError(error));
  }
};
export const asyncAddCategory = async (data: TAddCategory) => {
  try {
    const Category = await baseUrl.post("/api/v1/category", data);
    toast.success("category added successful");

    return Category.data;
  } catch (error: any) {
    throw toast.error(
      error.response?.data.error?.meta?.target || "An unknown error occurred."
    );
  }
};

export const asyncEditCategory = async (data: TAddCategory) => {
  try {
    const Category = await baseUrl.patch("/api/v1/category/" + data.id, data);
    toast.success("category updated successful");

    return Category.data;
  } catch (error) {
    throw toast.error(axiosError(error));
  }
};

export const asyncDeleteCategory = async (categoryId: number) => {
  try {
    const response = await baseUrl.delete(`/api/v1/category/${categoryId}`);
    const data: TBasicResponse<TCategoryResponse> = await response.data;
    return data.data;
  } catch (error) {
    throw toast.error(axiosError(error));
  }
};
