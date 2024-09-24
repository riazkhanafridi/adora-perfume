import { baseUrl } from "../../config/config";

export type TBasicResponse<T> = {
  data: T;
};

export type TBrandResponse = {
  id?: number;
  name: string;
};

export type TAddBrand = TBrandResponse;

export const asyncGetAllBrand = async () => {
  try {
    const response = await baseUrl.get(`/api/v1/brand`);
    const data: TBasicResponse<TBrandResponse[]> = await response.data;
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const asyncAddBrand = async (data: TAddBrand) => {
  try {
    const response = await baseUrl.post("/api/v1/brand", data);
    return response.data;
  } catch (error) {
    console.error("Error adding Brand:", error);
    throw error; // Throw the error so it can be handled by React Query
  }
};

export const asyncEditBrand = async (data: TAddBrand) => {
  try {
    const Brand = await baseUrl.patch("/api/v1/brand/" + data.id, data);

    return Brand.data;
  } catch (error) {
    console.error("Error to update data", error);
  }
};

export const asyncDeleteBrand = async (brandId: number) => {
  try {
    const response = await baseUrl.delete(`/api/v1/brand/${brandId}`);
    const data: TBasicResponse<TBrandResponse> = await response.data;
    return data.data;
  } catch (error) {
    console.log("Error deleting Brand:", error);
  }
};
