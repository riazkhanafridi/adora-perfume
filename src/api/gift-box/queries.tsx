import { useQuery } from "@tanstack/react-query";
import { asyncGetAllGiftBox } from "./fetchers";

export const useGetAllGiftBoxes = () =>
  useQuery({
    queryKey: ["giftBoxes"],
    queryFn: asyncGetAllGiftBox,
  });
