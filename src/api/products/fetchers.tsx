import { baseUrl, baseUrlForm } from "../../config/config";

export type TBasicResponse<T> = {
  data: T;
  metadata?: T;
};
export type TProductResponse = {
  id?: number;
  name: string;
  description?: string;
  price?: number;
  stock?: number;
 
  isShippingFree?: boolean;
  ml?: string;
  category?: {
    id?: number;
    name: string;
  };
  Brand?: {
    id?: number;
    name: string;
  };
  // packing?: {
  //   id?: number;
  //   price: number;
  //   image: string;
  //   color: string;
  // };
  taste?: {
    id?: number;
    name: string;
  };
  brandId?: number;
  tasteId?: number;
  packingId: number;
  productImage?: {
    id?: number;
    image: string;
  }[];
};

export type TAddProduct = {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  ml: string;
};

export const asyncGetAllProduct = async () => {
  try {
    const response = await baseUrl.get(`/api/v1/products`);

    const data: TBasicResponse<TProductResponse[]> = await response.data;
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const asyncAddProduct = async (data: TAddProduct) => {
  try {
    const Product = await baseUrlForm.post("/api/v1/product", data);

    return Product.data;
  } catch (error) {
    console.error("Error adding Product", error);
  }
};

export const asyncDeleteProduct = async (productId: number) => {
  try {
    const response = await baseUrl.delete(`/api/v1/product/${productId}`);
    const data: TBasicResponse<TProductResponse> = await response.data;
    return data.data;
  } catch (error) {
    console.log("Error deleting product:", error);
  }
};
