import { useQuery } from "@tanstack/react-query";
import { asyncGetAllBrand } from "./fetchers";

export const useGetAllBrand = () =>
  useQuery({
    queryKey: ["brand"],
    queryFn: asyncGetAllBrand,
  });

