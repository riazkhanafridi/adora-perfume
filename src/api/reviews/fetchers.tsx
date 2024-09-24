import { baseUrl } from "../../config/config";

export type TBasicResponse<T> = {
  data: T;
};

export type TReviewsResponse = {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  stars: string;
  isVisible: string;
};

export const asyncGetAllReviews = async () => {
  try {
    const response = await baseUrl.get(`/api/v1/reviews`);
    const data: TBasicResponse<TReviewsResponse[]> = await response.data;
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteReviews = async (reviewsId: number) => {
  try {
    const response = await baseUrl.delete(`/api/v1/reviews/${reviewsId}`);
    const data: TBasicResponse<TReviewsResponse> = await response.data;
    return data.data;
  } catch (error) {
    console.log("Error deleting reviewsId:", error);
  }
};
