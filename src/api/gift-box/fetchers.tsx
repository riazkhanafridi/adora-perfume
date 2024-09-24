import { baseUrl, baseUrlForm } from "../../config/config";

export type TBasicResponse<T> = {
  data: T;
};
export type TGiftBoxResponse = {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  ml: string;
  image: string;
  isGift: number;
};
export type TAddGiftBox = TGiftBoxResponse;

export const asyncGetAllGiftBox = async () => {
  try {
    const response = await baseUrl.get(`/api/v1/gift-box`);
    const data: TBasicResponse<TGiftBoxResponse[]> = await response.data;
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const asyncAddGiftBox = async (data: TAddGiftBox) => {
  try {
    const GiftBox = await baseUrlForm.post("/api/v1/gift-box", data);

    return GiftBox.data;
  } catch (error) {
    console.error("Error adding giftBox", error);
  }
};

export const asyncDeleteGiftBox = async (giftId: number) => {
  try {
    const response = await baseUrl.delete(`/api/v1/gift-box/${giftId}`);
    const data: TBasicResponse<TGiftBoxResponse> = await response.data;
    return data.data;
  } catch (error) {
    console.log("Error deleting giftBox:", error);
  }
};
