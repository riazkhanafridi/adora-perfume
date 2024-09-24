import { baseUrl, baseUrlForm } from "../../config/config";

export type TBasicResponse<T> = {
  data: T;
};

export type TTasteResponse = {
  id?: number;
  name: string;
  image: string;
};

export type TAddTaste = TTasteResponse;
export const asyncGetAllTaste = async () => {
  try {
    const response = await baseUrl.get(`/api/v1/taste`);
    const data: TBasicResponse<TTasteResponse[]> = await response.data;
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const asyncAddTaste = async (data: TAddTaste) => {
  try {
    const Taste = await baseUrlForm.post("/api/v1/taste", data);

    return Taste.data;
  } catch (error) {
    console.error("Error adding Taste:", error);
  }
};

export const asyncEditTaste = async (data: TAddTaste) => {
  try {
    const Taste = await baseUrlForm.patch("/api/v1/taste/" + data.id, data);

    return Taste.data;
  } catch (error) {
    console.error("Error to update data", error);
  }
};

export const asyncDeleteTaste = async (tasteId: number) => {
  try {
    const response = await baseUrl.delete(`/api/v1/taste/${tasteId}`);
    const data: TBasicResponse<TTasteResponse> = await response.data;
    return data.data;
  } catch (error) {
    console.log("Error deleting taste:", error);
  }
};
