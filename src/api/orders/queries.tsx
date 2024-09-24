import { useQuery } from "@tanstack/react-query";
import { asyncGetAllOrders } from "./fetchers";

export const useGetAllOrders = () =>
  useQuery({
    queryKey: ["orders"],
    queryFn: asyncGetAllOrders,
  });