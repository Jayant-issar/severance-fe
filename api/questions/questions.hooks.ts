import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getQuestions } from "./questions.api";

export function useQuestions() {
  return useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });
}
