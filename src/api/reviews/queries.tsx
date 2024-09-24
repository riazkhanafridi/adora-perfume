import { useQuery } from "@tanstack/react-query";
import { asyncGetAllReviews} from "./fetchers";

export const useGetAllReviews = () =>
  useQuery({
    queryKey: ["reviews"],
    queryFn: asyncGetAllReviews,
  });

