import type { Metadata } from "next"
import Link from "next/link"
import QuestionHeader from "@/components/questions/header"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Severance — Questions",
  description: "Browse backend practice questions by difficulty and topic. Learn by doing with Severance.",
}

type Difficulty = "Easy" | "Medium" | "Hard"

type Question = {
  id: number
  name: string
  difficulty: Difficulty
  tags: string[]
}

const questions: Question[] = [
  {
    id: 1,
    name: "Build a RESTful Users API",
    difficulty: "Easy",
    tags: ["REST", "CRUD", "HTTP"],
  },
  {
    id: 2,
    name: "Implement JWT Authentication",
    difficulty: "Medium",
    tags: ["Auth", "Security", "Tokens"],
  },
  {
    id: 3,
    name: "Design a Rate Limiter",
    difficulty: "Hard",
    tags: ["Scaling", "Algorithms", "Redis"],
  },
  {
    id: 4,
    name: "Upload Files to Object Storage",
    difficulty: "Medium",
    tags: ["Storage", "S3", "Presigned URLs"],
  },
  {
    id: 5,
    name: "Create a Webhook Receiver",
    difficulty: "Easy",
    tags: ["Webhooks", "HTTP", "Idempotency"],
  },
  {
    id: 6,
    name: "Create a Webhook Receiver",
    difficulty: "Easy",
    tags: ["Webhooks", "HTTP", "Idempotency"],
  },
  {
    id: 7,
    name: "Create a Webhook Receiver",
    difficulty: "Easy",
    tags: ["Webhooks", "HTTP", "Idempotency"],
  },
  {
    id: 8,
    name: "Create a Webhook Receiver",
    difficulty: "Easy",
    tags: ["Webhooks", "HTTP", "Idempotency"],
  },
  {
    id: 9,
    name: "Create a Webhook Receiver",
    difficulty: "Easy",
    tags: ["Webhooks", "HTTP", "Idempotency"],
  },
  {
    id: 10,
    name: "Create a Webhook Receiver",
    difficulty: "Easy",
    tags: ["Webhooks", "HTTP", "Idempotency"],
  },
  {
    id: 11,
    name: "Create a Webhook Receiver",
    difficulty: "Easy",
    tags: ["Webhooks", "HTTP", "Idempotency"],
  },
  {
    id: 12,
    name: "Create a Webhook Receiver",
    difficulty: "Easy",
    tags: ["Webhooks", "HTTP", "Idempotency"],
  },
  {
    id: 13,
    name: "Create a Webhook Receiver",
    difficulty: "Easy",
    tags: ["Webhooks", "HTTP", "Idempotency"],
  },
]

function difficultyBadgeVariant(diff: Difficulty) {
  // Map difficulty to existing badge variants to keep design tokens consistent
  switch (diff) {
    case "Easy":
      return "secondary" as const
    case "Medium":
      return "default" as const
    case "Hard":
      return "destructive" as const
  }
}

export default function QuestionsPage() {
  return (
    <>
      <QuestionHeader />

      <main className="relative px-4 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/2 -z-10 -translate-x-1/3 -translate-y-1/2 blur-3xl"
          style={{
            width: "48rem",
            height: "32rem",
            background:
              "radial-gradient(ellipse 60% 45% at left center, hsl(var(--primary) / 0.16) 0%, transparent 70%)",
            willChange: "transform",
          }}
        />
        <section className="mx-auto w-full max-w-5xl py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h1 className="text-pretty text-2xl font-semibold leading-7 text-foreground md:text-3xl">
                All Questions
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Practice backend questions and learn by doing. Choose a problem and start solving.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="secondary" asChild>
                <Link href="#">Filters</Link>
              </Button>
              <Button asChild>
                <Link href="#">New Session</Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card shadow">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="w-[140px]">Difficulty</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead className="w-[180px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {questions.map((q) => (
                  <TableRow key={q.id}>
                    <TableCell className="text-muted-foreground">{q.id}</TableCell>
                    <TableCell className="font-medium">
                      <Link href="#" className="text-foreground underline-offset-4 hover:underline">
                        {q.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge variant={difficultyBadgeVariant(q.difficulty)}>{q.difficulty}</Badge>
                    </TableCell>
                    <TableCell className="flex flex-wrap gap-1 py-4">
                      {q.tags.map((t) => (
                        <Badge key={t} variant="outline" className="font-normal">
                          {t}
                        </Badge>
                      ))}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="#">View</Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={`/code/${q.id}`}>Solve</Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile actions */}
          <div className="mt-4 flex sm:hidden items-center justify-end gap-2">
            <Button variant="secondary" asChild>
              <Link href="#">Filters</Link>
            </Button>
            <Button asChild>
              <Link href="#">New Session</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
