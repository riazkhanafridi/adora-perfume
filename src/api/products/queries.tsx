import { useQuery } from "@tanstack/react-query";
import { asyncGetAllProduct } from "./fetchers";

export const useGetAllProduct = () =>
  useQuery({
    queryKey: ["product"],
    queryFn: asyncGetAllProduct,
  });
