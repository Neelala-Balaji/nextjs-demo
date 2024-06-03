import { useQuery } from "@tanstack/react-query";

export const useApiData = (key, callback) => {
  const result = useQuery({
    queryKey: [key],
    queryFn: callback,
  });

  return result;
};
