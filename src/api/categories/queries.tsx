import { Query, useQuery } from "@tanstack/react-query";
import { asyncCategoryById, asyncGetAllCategory, asyncSearchCategory } from "./fetchers";

export enum QueryKeys {
  CATEGORY = "category",
}

export const useGetAllCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: asyncGetAllCategory,
  });

export const useSingleCategory = (categoryId: number) => {
  useQuery({
    queryKey: [QueryKeys.CATEGORY],
    queryFn: () => asyncCategoryById(categoryId),
  });
};

export const useSearchCategory = (categoryId: string) => {
  useQuery({
    queryKey: ["categories", categoryId],
    queryFn:()=>asyncSearchCategory(categoryId)
    
  });
};
