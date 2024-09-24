import { useQuery } from "@tanstack/react-query";
import { asyncGetAllTaste} from "./fetchers";

export const useGetAllTaste = () =>
  useQuery({
    queryKey: ["taste"],
    queryFn: asyncGetAllTaste,
  });

