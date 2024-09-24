import { baseUrl } from "../../config/config";

export type TBasicResponse<T> = {
  data: T;
};

export type TOrdersResponse = {
  id?: number;
  
  description: string;
  createdAt: string;
  status: string;
  address: string;
  netAmount:number
};



export const asyncGetAllOrders= async () => {
  try {
    const response = await baseUrl.get(`/api/v1/all-orders`);
    const data: TBasicResponse<TOrdersResponse[]> = await response.data;
   
    return data.data;
  } catch (error) {
    console.log(error);
  }
};


