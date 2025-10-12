export type Difficulty = "Easy" | "Medium" | "Hard"

export type Question = {
  id: number
  name: string
  difficulty: Difficulty
  tags: string[]
}