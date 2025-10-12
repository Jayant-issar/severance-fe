import { mockQuestions } from "@/constants/questions";
import { axiosInstance } from "@/lib/axios";

import { Question, Difficulty } from "@/types/questions.types";

export async function getQuestions(): Promise<Question[]> {
    return mockQuestions
}

