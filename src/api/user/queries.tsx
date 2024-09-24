import { useQuery } from "@tanstack/react-query";
import { asyncGetAllUsers} from "./fetchers";

export const useGetAllUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: asyncGetAllUsers,
  });
