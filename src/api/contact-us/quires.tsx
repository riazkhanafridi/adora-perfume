import { useQuery } from "@tanstack/react-query";
import { asyncGetAllContact } from "./fetchers";

export const useGetAllContact = () =>
  useQuery({
    queryKey: ["contact"],
    queryFn: asyncGetAllContact,
  });
